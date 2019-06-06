import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autoBind from 'react-autobind';

import Easing from '../utils/js/Easing';
import getStepFunction from '../utils/js/AnimationSetup';

import {
  MAX_SCALE_PADDING,
  INITIAL_ORIGIN_SCALE,
  MAX_OPACITY,
  RIPPLE_DURATION,
  FADE_DURATION,
  INITIAL_DIAMETER,
} from './constants';

import './KynPaperRipple.css';

/**
 * This component behaves like a div with postion relative, but displays the [material paper ripple effect](https://material-components.github.io/material-components-web-catalog/#/component/ripple) when you click on it.
 *
 * **Note:** You can override the position to fixed or absolute, but static won't work.
 *
 * @author [David Kleiman](https://github.com/dkleiman)
 */
class KynPaperRipple extends React.Component {
  static propTypes = {
    /** Stuff you'd normally put into a div with position relative */
    children: PropTypes.node,
    /** Pass through to className */
    className: PropTypes.string,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func,
  };

  static defaultProps = {
    children: null,
    className: '',
    onMouseDown: () => {},
    onMouseUp: () => {},
    onMouseLeave: () => {},
    onTouchStart: () => {},
    onTouchEnd: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
    };

    this.container = React.createRef();
    this.cancelled = false;
    this.isRunning = false;
    this.startPromise = {
      then(cb) {
        cb();
      },
    };

    autoBind(this);
  }

  componentWillUnmount() {
    this.cancelled = true;
  }

  actionStart(e) {
    // Call the pass through
    const {
      onMouseDown,
      onTouchStart,
    } = this.props;
    onMouseDown(e);
    onTouchStart(e);

    this.isRunning = true;

    const currentTouch = !isNaN(e.clientX) ? e : e.touches[0];
    const {
      clientX,
      clientY,
    } = currentTouch;
    const containerElement = this.container.current;
    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;
    const { left, top } = containerElement.getBoundingClientRect();

    const maxDim = Math.max(containerWidth, containerHeight);
    const maxScale = 2 * Math.sqrt(containerWidth ** 2 + containerHeight ** 2) / INITIAL_DIAMETER + MAX_SCALE_PADDING;
    const initialScale = maxDim * INITIAL_ORIGIN_SCALE / INITIAL_DIAMETER;

    const scaleDifference = maxScale - initialScale;

    this.setState({
      x: clientX - left,
      y: clientY - top,
      opacity: MAX_OPACITY,
      scale: initialScale,
    });

    this.startPromise = new Promise((resolve) => {
      const step = getStepFunction({
        totalAnimationTime: RIPPLE_DURATION,
        intervalLength: scaleDifference,
        easingFunction: Easing.easeOutCirc,
      }, (delta) => {
        if (this.cancelled) {
          return;
        }
        this.setState((prevState) => {
          const state = Object.assign({}, prevState);
          state.scale += delta;
          if (state.scale < maxScale) {
            requestAnimationFrame(step);
          } else {
            this.isRunning = false;
            resolve();
          }
          return state;
        });
      });
      requestAnimationFrame(step);
    });
  }

  actionEnd(e) {
    const {
      onMouseUp,
      onTouchEnd,
      onMouseLeave,
    } = this.props;
    onMouseUp(e);
    onTouchEnd(e);
    onMouseLeave(e);

    const maxOpacity = MAX_OPACITY;
    const step = getStepFunction({
      totalAnimationTime: FADE_DURATION,
      intervalLength: maxOpacity,
      easingFunction: Easing.easeOutCirc,
    }, (delta) => {
      if (this.cancelled) {
        return;
      }
      this.setState((prevState) => {
        const state = Object.assign({}, prevState);
        state.opacity -= delta;
        if (state.opacity > 0 && !this.isRunning) {
          requestAnimationFrame(step);
        }
        return state;
      });
    });
    this.startPromise.then(() => {
      requestAnimationFrame(step);
    });
  }

  render() {
    const {
      children,
      className,
      onMouseDown, // Ignore
      onMouseUp, // Ignore
      onTouchStart, // Ignore
      onTouchEnd, // Ignore
      onMouseLeave, // Ignore
      ...otherProps
    } = this.props;

    const {
      x,
      y,
      scale,
      opacity,
    } = this.state;

    const fullClassName = classnames({
      KynPaperRipple: true,
      [className]: !!className,
    });
    return (
      <div
        className={fullClassName}
        ref={this.container}
        onMouseDown={this.actionStart}
        onMouseUp={this.actionEnd}
        onTouchStart={this.actionStart}
        onTouchEnd={this.actionEnd}
        onMouseLeave={this.actionEnd}
        {...otherProps}
      >
        <div className="KynPaperRipple_overlay" />
        <div className="KynPaperRipple_circleContainer">
          <div
            className="KynPaperRipple_circle"
            style={{
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              opacity: opacity,
            }}
          />
        </div>
        {children}
      </div>
    );
  }
};

export default KynPaperRipple;
