import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Component Button', () => {
  it('should render without crashing', () => {
    const component = shallow(<Button />);
    expect(component).toBeTruthy();
  });

  it('should have class main when given no variant', () => {
    const component = shallow(<Button />);
    expect(component.hasClass('main')).toEqual(true);
  });

  it('should have class outline when given variant outline', () => {
    const component = shallow(<Button variant='outline' />);
    expect(component.hasClass('outline')).toEqual(true);
  });
});
