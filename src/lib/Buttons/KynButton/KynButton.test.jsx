import React from 'react';
import { shallow, mount } from 'enzyme';
import KynButton from './KynButton';

it('handles elevation for raised buttons', () => {
  const componentWrapper = shallow(<KynButton variant="raised" />);

  let elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(2);

  componentWrapper.simulate('mouseenter');
  elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(4);

  componentWrapper.simulate('mousedown');
  elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(6);

  componentWrapper.simulate('mouseup');
  elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(4);
});

it('doesn\'t handle elevation for other buttons', () => {
  const componentWrapper = shallow(<KynButton variant="outline" />);

  let elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(0);

  componentWrapper.simulate('mouseenter');
  elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(0);

  componentWrapper.simulate('mousedown');
  elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(0);

  componentWrapper.simulate('mouseup');
  elevation = componentWrapper.state('elevation');
  expect(elevation).toBe(0);
});

it('handles clicks', () => {
  const mockClick = jest.fn();
  const componentWrapper = shallow(<KynButton onClick={mockClick} />);

  const button = componentWrapper.find('button');
  button.simulate('click');
  expect(mockClick.mock.calls.length).toBe(1);
});

it('doesn\'t handle clicks when disabled', () => {
  const mockClick = jest.fn();

  // Need to mount because shallow simulates clicks by just calling onClick
  // Real behavior is different since the button is disabled
  const componentWrapper = mount(<KynButton onClick={mockClick} disabled />);

  const button = componentWrapper.find('button');
  button.simulate('click');
  expect(mockClick.mock.calls.length).toBe(0);

  componentWrapper.unmount();
});

it('should have isDisabled classs when disabled', () => {
  const componentWrapper = shallow(<KynButton disabled />);
  expect(componentWrapper.hasClass('KynButton-isDisabled')).toBe(true);
});
