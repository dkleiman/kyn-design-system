import React from 'react';
import { mount } from 'enzyme';
import KynPaperRipple from './KynPaperRipple';

it('should properly set props and use handlers that are passed in', () => {
  const onMouseDownMock = jest.fn();
  const paperRippleWrapper = mount(
    <KynPaperRipple
      data-id="test-prop-passthrough"
      className="test-classname-passthrough"
      onMouseDown={onMouseDownMock}
    />
  );

  const containingDiv = paperRippleWrapper.find('.KynPaperRipple');
  expect(containingDiv.prop('data-id')).toBe('test-prop-passthrough');
  expect(containingDiv.hasClass('test-classname-passthrough')).toBe(true);

  // Check if onMouseDown prop works
  paperRippleWrapper.simulate('mousedown', {
    clientX: 0,
    clientY: 0,
  });
  expect(onMouseDownMock.mock.calls.length).toBe(1);
  paperRippleWrapper.unmount();
});
