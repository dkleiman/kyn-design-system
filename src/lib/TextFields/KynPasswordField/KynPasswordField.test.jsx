import React from 'react';
import { mount } from 'enzyme';
import KynPasswordField from './KynPasswordField';

it('toggles visibility when clicking on the icon button', () => {
  const componentWrapper = mount(<KynPasswordField />);

  expect(componentWrapper.find('i').text()).toBe('visibility');
  expect(componentWrapper.find('input').prop('type')).toBe('password');

  componentWrapper.find('button').simulate('click');

  expect(componentWrapper.find('i').text()).toBe('visibility_off');
  expect(componentWrapper.find('input').prop('type')).toBe('text');
  componentWrapper.unmount();
});
