import React from 'react';
import autoBind from 'react-autobind';

import KynTextField from '../KynTextField';
import KynIconButton from '../../Buttons/KynIconButton';

import './KynPasswordField.css';

/**
 * This component is a specific case of the `KynTextField` with a `KynIconButton` that toggles the visibility of the text. For details on theming and props, see [`KynTextField`](#kyntextfield).
 * 
 * @author [David Kleiman](https://github.com/dkleiman)
 */
class KynPasswordField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    autoBind(this);
  }

  toggleIsVisible() {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  }

  render() {
    const {
      isVisible,
    } = this.state;

    let type = 'password';
    let name = 'visibility';

    if (isVisible) {
      type = 'text';
      name = 'visibility_off';
    }
    return (
      <KynTextField
        {...this.props}
        type={type}
        suffixNode={(
          <KynIconButton
            className="KynPasswordField_iconButton"
            name={name}
            onClick={this.toggleIsVisible}
          />
        )}
      />
    );
  }
}
export default KynPasswordField;
