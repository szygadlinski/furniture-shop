import React from 'react';
import { shallow, mount } from 'enzyme';
import Swipeable from './Swipeable';

// TouchEvent helpers

function createClientXY(x, y) {
  return { clientX: x, clientY: y };
}

function createStartTouchEventObject({ x = 0, y = 0 }) {
  return { touches: [createClientXY(x, y)] };
}

function createMoveTouchEventObject({ x = 0, y = 0 }) {
  return { changedTouches: [createClientXY(x, y)] };
}

describe('Component Swipeable', () => {
  it('should render without crashing', () => {
    const component = shallow(<Swipeable />);
    expect(component).toBeTruthy();
  });

  it('should call leftAction when swiped left', () => {
    const leftAction = jest.fn();
    const component = mount(<Swipeable leftAction={leftAction} />);
    component.simulate('touchstart', createStartTouchEventObject({ x: 300, y: 0 }));
    component.simulate('touchmove', createMoveTouchEventObject({ x: 200, y: 0 }));
    component.simulate('touchend', createMoveTouchEventObject({ x: 100, y: 0 }));

    expect(leftAction).toHaveBeenCalled();
  });

  it('should call leftAction when mouse moved right', () => {
    const rightAction = jest.fn();
    const component = mount(<Swipeable rightAction={rightAction} mouseEvents />);
    component.simulate('mousedown', createClientXY(100, 0));
    component.simulate('mouseup', createClientXY(300, 0));
    expect(rightAction).toHaveBeenCalled();
  });
});
