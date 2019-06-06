import React from 'react';
import { mount } from 'enzyme';
import KynTextField from './KynTextField';

it('renders with isError false', () => {
  const textFieldWrapper = mount(<KynTextField
    label="Revenue Per User*"
    className="my-custom-text-field-theme"
    value="some-value"
    prefixText="$"
    suffixText="/user"
    align="right"
    placeholder="16.00"
    type="text"
    helperText="*Required"
    errorText="This is an error"
    maxLength={30}
    prefixNode={<div className="test-prefix-node"/>}
    suffixNode={<div className="test-suffix-node"/>}
  />);
  const textField = textFieldWrapper.getDOMNode();

  const { classList } = textField;
  expect(classList).toContain('KynTextField');
  expect(classList).toContain('KynTextField-rightAligned');
  expect(classList).toContain('my-custom-text-field-theme');
  expect(classList.length).toBe(3);

  const labelText = textField.querySelector('.KynTextField_label');
  expect(labelText.textContent.trim()).toBe('Revenue Per User*');

  const prefixText = textField.querySelector('.KynTextField_prefixText');
  expect(prefixText.textContent.trim()).toBe('$');

  const suffixText = textField.querySelector('.KynTextField_suffixText');
  expect(suffixText.textContent.trim()).toBe('/user');

  const input = textField.querySelector('.KynTextField_input');
  const {
    value,
    placeholder,
    maxLength,
    type,
  } = input;
  expect(value).toBe('some-value');
  expect(placeholder).toBe('16.00');
  expect(maxLength).toBe(30);
  expect(type).toBe('text');

  const charCounter = textField.querySelector('.KynTextField_charCounter');
  expect(charCounter.textContent.trim()).toBe(`${value.length}/30`);

  const helperText = textField.querySelector('.KynTextField_helperText');
  expect(helperText.textContent.trim()).toBe('*Required');

  const errorText = textField.querySelector('.KynTextField_errorText');
  expect(errorText).toBeNull();

  const prefixNode = textField.querySelector('.test-prefix-node');
  expect(prefixNode).toBeTruthy();

  const suffixNode = textField.querySelector('.test-suffix-node');
  expect(suffixNode).toBeTruthy();

  textFieldWrapper.unmount();
});

it('renders with isError true', () => {
  const textFieldWrapper = mount(<KynTextField
    type="text"
    helperText="*Required"
    isError
    errorText="This is an error"
  />);
  const textField = textFieldWrapper.getDOMNode();

  expect(textField.classList).toContain('KynTextField-isError');

  const helperText = textField.querySelector('.KynTextField_helperText');
  expect(helperText).toBeNull();

  const errorText = textField.querySelector('.KynTextField_errorText');
  expect(errorText.textContent.trim()).toBe('This is an error');

  textFieldWrapper.unmount();
});

it('renders with disabled true', () => {
  const textFieldWrapper = mount(<KynTextField
    type="text"
    disabled
  />);
  const textField = textFieldWrapper.getDOMNode();

  expect(textField.classList).toContain('KynTextField-isDisabled');

  const input = textField.querySelector('.KynTextField_input');
  expect(input.disabled).toBe(true);

  textFieldWrapper.unmount();
});

it('should focus the text field when clicking on it', () => {
  const textFieldWrapper = mount(<KynTextField
    type="text"
  />);

  const innerContainer = textFieldWrapper.find('.KynTextField_innerContainer');
  innerContainer.simulate('click');

  const input = textFieldWrapper.find('.KynTextField_input');
  expect(input.getDOMNode()).toEqual(document.activeElement);

  textFieldWrapper.unmount();
});
