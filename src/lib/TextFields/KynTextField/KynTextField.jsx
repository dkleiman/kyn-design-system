import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autoBind from 'react-autobind';

import './KynTextField.css';
import '../../utils/css/reset.css'

/**
 * This component is an implementation of the [Material Filled Text Field](https://material.io/design/components/text-fields.html) component. It is a fully controlled component, meaning it has no internal state.
 * 
 * @author [David Kleiman](https://github.com/dkleiman)
 */
class KynTextField extends React.Component {
  static propTypes = {
    /** Label for the text field */
    label: PropTypes.string,
    /** Class to add to the component container */
    className: PropTypes.string,
    /** onChange handler */
    onChange: PropTypes.func,
    /** Type of the input */
    type: PropTypes.oneOf(['text', 'password']),
    /** Text to prefix your field with */
    prefixText: PropTypes.string,
    /** Text to suffix your field with */
    suffixText: PropTypes.string,
    /** Value of the input */
    value: PropTypes.string,
    /** Placeholder of the input */
    placeholder: PropTypes.string,
    /** Text align of the input */
    align: PropTypes.oneOf(['left', 'right']),
    /** Whether the text field is disabled */
    disabled: PropTypes.bool,
    /** Helper text that appears underneath the text field */
    helperText: PropTypes.string,
    /** `true` if there is an error */
    isError: PropTypes.bool,
    /** Text to display when there's an error */
    errorText: PropTypes.string,
    /** Max length of input. When this is set, the char counter is automatically displayed */
    maxLength: PropTypes.number,
    /** Node to prefix the input with */
    prefixNode: PropTypes.node,
    /** Node to suffix the input with */
    suffixNode: PropTypes.node,
  };

  static defaultProps = {
    label: '',
    className: '',
    prefixText: '',
    suffixText: '',
    onChange() {},
    type: 'text',
    value: '',
    placeholder: '',
    align: 'left',
    disabled: false,
    helperText: '',
    isError: false,
    errorText: '',
    maxLength: undefined,
    prefixNode: null,
    suffixNode: null,
  };

  constructor(...args) {
    super(...args);
    this.textInput = React.createRef();

    autoBind(this);
  }

  focusTextInput(e) {
    this.textInput.current.focus();
  }

  render() {
    const {
      type,
      label,
      value,
      onChange,
      className,
      prefixText,
      suffixText,
      placeholder,
      align,
      disabled,
      isError,
      errorText,
      helperText,
      maxLength,
      prefixNode,
      suffixNode,
    } = this.props;
    const containerClassNames = classnames({
      KynTextField: true,
      'KynTextField-rightAligned': align === 'right',
      'KynTextField-isDisabled': disabled,
      'KynTextField-isError': isError,
      [className]: !!className,
    });

    return (
      <div className={containerClassNames}>
        <div className="KynTextField_innerContainer" onClick={this.focusTextInput}>
          <div className="KynTextField_prefixContainer">
            {prefixNode}
          </div>
          <div className="KynTextField_inputContainer">
            <input
              ref={this.textInput}
              type={type}
              className="KynTextField_input"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              disabled={disabled}
              maxLength={maxLength}
              required
            />
            {prefixText && (
              <div className="KynTextField_prefixText">
                {prefixText}
              </div>
            )}
            {suffixText && (
              <div className="KynTextField_suffixText">
                {suffixText}
              </div>
            )}
            {label && <div className="KynTextField_label">{label}</div>}
            {helperText && !isError && <div className="KynTextField_helperText">{helperText}</div>}
            {isError && <div className="KynTextField_errorText">{errorText}</div>}
            {maxLength && <div className="KynTextField_charCounter">{`${value.length}/${maxLength}`}</div>}
          </div>
          <div className="KynTextField_suffixContainer">
            {suffixNode}
          </div>
          <div className="KynTextField_staticUnderline" />
          <div className="KynTextField_dynamicUnderline" />
        </div>
      </div>
    )
  }
};

export default KynTextField;