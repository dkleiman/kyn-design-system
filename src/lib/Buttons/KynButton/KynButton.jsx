import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autoBind from 'react-autobind';

import KynPaperRipple from '../../KynPaperRipple';
import KynElevation from '../../KynElevation';

import './KynButton.css';
import '../../utils/css/reset.css';
import '../../utils/css/elevation.css';

/**
 * This is a button with 3 variants: outline, text, and raised.
 *
 * @author [David Kleiman](https://github.com/dkleiman)
 */
class KynButton extends React.Component {
  static propTypes = {
    /** Stuff you'd normally pass to a button */
    children: PropTypes.node,
    /** Button type */
    type: PropTypes.string,
    /** Class names to add */
    className: PropTypes.string,
    /** Click handler */
    onClick: PropTypes.func,
    /** Button style variant */
    variant: PropTypes.oneOf(['text', 'outline', 'raised']),
    /** Whether the button is disabled */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    type: 'button',
    className: '',
    variant: 'raised',
    disabled: false,
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      elevation: props.variant === 'raised' ? 2 : 0,
    };

    autoBind(this);
  }

  onMouseEnter() {
    if (this.props.variant === 'raised') {
      this.setState({ elevation: 4 });
    }
  }

  onMouseLeave() {
    if (this.props.variant === 'raised') {
      this.setState({ elevation: 2 });
    }
  }

  onMouseDown() {
    if (this.props.variant === 'raised') {
      this.setState({ elevation: 6 });
    }
  }

  onMouseUp() {
    if (this.props.variant === 'raised') {
      this.setState({ elevation: 4 });
    }
  }

  render() {
    const {
      children,
      type,
      className,
      onClick,
      variant,
      disabled,
    } = this.props;

    const { elevation } = this.state;
    const fullClassName = classnames({
      KynButton: true,
      [className]: !!className,
      [`KynButton-${variant}`]: true,
      [`KynButton-isDisabled`]: disabled,
    });

    return (
      <KynElevation
        className={fullClassName}
        elevation={elevation}
        onMouseUp={this.onMouseUp}
        onMouseDown={this.onMouseDown}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onTouchStart={this.onMouseDown}
        onTouchEnd={this.onMouseLeave}
      >
        <KynPaperRipple>
          <button
            className="KynButton_button"
            type={type}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        </KynPaperRipple>
      </KynElevation>
    );
  }
}

export default KynButton;
