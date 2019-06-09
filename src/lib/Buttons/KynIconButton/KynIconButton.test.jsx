import React from 'react';
import { mount } from 'enzyme';
import KynIconButton from './KynIconButton';

it('renders with the proper icon', () => {
  const componentWrapper = mount(<KynIconButton name="person"/>);
  expect(componentWrapper.find('.KynIcon').text()).toBe('person');

  componentWrapper.unmount();
});

it('handles clicks', () => {
  const mockOnClick = jest.fn();
  const componentWrapper = mount(<KynIconButton name="person" onClick={mockOnClick} />);
  componentWrapper.find('button').simulate('click');

  expect(mockOnClick.mock.calls.length).toBe(1);
  componentWrapper.unmount();
});
