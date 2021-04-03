import React from 'react';
import { shallow } from 'enzyme';
import GridProduct from './GridProduct';

describe('Component GridProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<GridProduct />);
    expect(component).toBeTruthy();
  });

  it('should render oldPrice with correct value', () => {
    const mockPrice = 40;
    const component = shallow(<GridProduct oldPrice={mockPrice} />);
    const oldPrice = component.find('.old_price');
    expect(oldPrice.length).toEqual(1);
    expect(oldPrice.childAt(1).text()).toEqual(mockPrice.toString());
  });
});
