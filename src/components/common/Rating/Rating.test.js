import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating';

describe('Component Rating', () => {
  it('should render without crashing', () => {
    const component = shallow(<Rating />);
    expect(component).toBeTruthy();
  });
});
