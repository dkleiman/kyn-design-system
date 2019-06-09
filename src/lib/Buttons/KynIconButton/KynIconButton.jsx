import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import KynButton from '../KynButton';
import KynIcon from '../../KynIcon';

import './KynIconButton.css';

/**
 * This component is a button that doesn't have text; only an icon.
 *
 * @author [David Kleiman](https://github.com/dkleiman)
 */
const KynIconButton = (props) => {
  const {
    className,
    name,
    onClick,
  } = props;
  const classNames = classnames({
    KynIconButton: true,
    [className]: !!className,
  });
  return (
    <KynButton
      className={classNames}
      type="button"
      variant="text"
      onClick={onClick}
    >
      <KynIcon name={name} />
    </KynButton>
  );
}

KynIconButton.propTypes = {
  /** className passthrough */
  className: PropTypes.string,
  /** icon name */
  name: PropTypes.string.isRequired,
  /** pass through to button onClick */
  onClick: PropTypes.func,
};

KynIconButton.defaultProps = {
  className: '',
  onClick: () => {},
};

export default KynIconButton;
