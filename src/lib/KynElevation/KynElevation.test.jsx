import React from 'react';
import { mount } from 'enzyme';
import KynElevation from './KynElevation';

it('renders', () => {
  const componentWrapper = mount(<KynElevation elevation={2} />);

  let shadow0 = componentWrapper.find('.KynElevation_shadow').at(0);
  let shadow1 = componentWrapper.find('.KynElevation_shadow').at(1);

  expect(shadow0.hasClass('is-visible')).toBe(true);
  expect(shadow0.hasClass('elevation-2')).toBe(true);

  expect(shadow1.hasClass('is-visible')).toBe(false);
  expect(shadow1.hasClass('elevation-2')).toBe(true);

  componentWrapper.setProps({ elevation: 8 });

  shadow0 = componentWrapper.find('.KynElevation_shadow').at(0);
  shadow1 = componentWrapper.find('.KynElevation_shadow').at(1);

  expect(shadow0.hasClass('is-visible')).toBe(false);
  expect(shadow0.hasClass('elevation-8')).toBe(false);
  expect(shadow0.hasClass('elevation-2')).toBe(true);

  expect(shadow1.hasClass('is-visible')).toBe(true);
  expect(shadow1.hasClass('elevation-8')).toBe(true);
  expect(shadow1.hasClass('elevation-2')).toBe(false);
  componentWrapper.unmount();
});
