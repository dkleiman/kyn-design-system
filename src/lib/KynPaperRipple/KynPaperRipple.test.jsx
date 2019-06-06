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

  const domNode = paperRippleWrapper.getDOMNode();
  expect(domNode.dataset.id).toBe('test-prop-passthrough');
  expect(domNode.classList).toContain('test-classname-passthrough');
  expect(domNode.classList.length).toBe(2);

  // Check if onMouseDown prop works
  paperRippleWrapper.simulate('mousedown', {
    clientX: 0,
    clientY: 0,
  });
  expect(onMouseDownMock.mock.calls.length).toBe(1);

  paperRippleWrapper.unmount();
});
