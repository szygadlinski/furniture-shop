import React from 'react';
import { shallow } from 'enzyme';
import CartWidget from './CartWidget';

describe('Component CartWidget', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartWidget />);
    expect(component).toBeTruthy();
  });
});
