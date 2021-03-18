import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox />);
    expect(component).toBeTruthy();
  });

  it('should render oldPrice with correct value', () => {
    const mockPrice = 40;
    const component = shallow(<ProductBox oldPrice={mockPrice} />);
    const oldPrice = component.find('.old_price');
    expect(oldPrice.length).toEqual(1);
    expect(oldPrice.childAt(1).text()).toEqual(mockPrice.toString());
  });
});
