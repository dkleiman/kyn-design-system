import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './KynElevation.css';
import '../utils/css/elevation.css';

/**
 * This component should be used to wrap other components that you want to give elevation to. It smoothly animates between elevations.
 *
 * @author [David Kleiman](https://github.com/dkleiman)
 */
class KynElevation extends React.Component {
  static propTypes = {
    /** Material elevation of the element */
    elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 8, 9, 12, 16, 24]),
    /** Children */
    children: PropTypes.node,
    /** ClassName */
    className: PropTypes.string,
  };

  static defaultProps = {
    elevation: 0,
    children: null,
    className: '',
  };

  constructor(props) {
    super(props);
    this.currentlyVisibleShadow = 0;
    this.cachedElevation = props.elevation;
  }

  render() {
    const {
      elevation,
      children,
      className,
      ...otherProps
    } = this.props;
    const { cachedElevation } = this;
    if (elevation !== cachedElevation) {
      this.cachedElevation = elevation;
      this.currentlyVisibleShadow = (this.currentlyVisibleShadow + 1) % 2;
    }

    const isVisibleShadow0 = this.currentlyVisibleShadow === 0;
    const shadow0ClassName = classnames({
      KynElevation_shadow: true,
      'is-visible': isVisibleShadow0,
      [`elevation-${isVisibleShadow0 ? elevation : cachedElevation}`]: true,
    });
    const shadow1ClassName = classnames({
      KynElevation_shadow: true,
      'is-visible': !isVisibleShadow0,
      [`elevation-${!isVisibleShadow0 ? elevation : cachedElevation}`]: true,
    });

    const containerClassName = classnames({
      KynElevation: true,
      [className]: true,
    });
    return (
      <div className={containerClassName} {...otherProps}>
        <div className={shadow0ClassName} />
        <div className={shadow1ClassName} />
        {children}
      </div>
    );
  }
}
export default KynElevation;
