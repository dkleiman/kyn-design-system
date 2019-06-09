import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './KynIcon.css';
import '../assets/fonts/material-icons.css';

/**
 * This component is a convenient semantic wrapper for [material icons.](https://material.io/tools/icons/?style=baseline)
 *
 * @author [David Kleiman](https://github.com/dkleiman)
 */
const KynIcon = (props) => {
  const { name, size, className } = props;
  const classNames = classnames({
    KynIcon: true,
    [className]: !!className,
    [`KynIcon-${size}`]: true,
  });
  return <i className={classNames}>{name}</i>;
}

KynIcon.propTypes = {
  /** One of the material icon names found [here.](https://material.io/tools/icons/?style=baseline) */
  name: PropTypes.string.isRequired,
  /** Size of the icon */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  /** Class name passthrough */
  className: PropTypes.string,
};

KynIcon.defaultProps = {
  size: 'medium',
  className: '',
};

export default KynIcon;
