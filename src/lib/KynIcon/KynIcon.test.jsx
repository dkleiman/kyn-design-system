import React from 'react';
import { shallow } from 'enzyme';
import KynIcon from './KynIcon';

it('renders with the correct props', () => {
  const componentWrapper = shallow(<KynIcon
    size="small"
    className="test-class"
    name="heart"
  />);
  expect(componentWrapper.hasClass('KynIcon-small')).toBe(true);
  expect(componentWrapper.hasClass('test-class')).toBe(true);
  expect(componentWrapper.text()).toBe('heart');
});
