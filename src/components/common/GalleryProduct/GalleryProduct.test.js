import React from 'react';
import { shallow } from 'enzyme';
import GalleryProduct from './GalleryProduct';

describe('Component GalleryProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<GalleryProduct />);
    expect(component).toBeTruthy();
  });

  it('should render oldPrice with correct value', () => {
    const mockPrice = 40;
    const component = shallow(<GalleryProduct oldPrice={mockPrice} />);
    const oldPrice = component.find('.old_price');
    expect(oldPrice.length).toEqual(1);
    expect(oldPrice.childAt(1).text()).toEqual(mockPrice.toString());
  });
});
