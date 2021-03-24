import React from 'react';
import { shallow } from 'enzyme';
import Deals from './Deals';

const deals = {
  leftImage: 'leftImage.jpg',
  leftDescription: ['left1', 'left2', 'left3'],
  rightUpImage: 'rightUpImage.jpg',
  rightUpDescription: ['rightUp1', 'rightUp2', 'rightUp3', 'rightUp4'],
  rightDownImage: 'rightDownImage.jpg',
  rightDownDescription: [
    'rightDown1',
    ' rightDown2',
    'rightDown3',
    'rightDown4',
    'rightDown5',
  ],
};

const component = shallow(<Deals deals={deals} />);

describe('Component Deals', () => {
  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('should contain div with class root', () => {
    expect(component.find('.root').length).toBe(1);
  });

  it('should contain div with class container', () => {
    expect(component.find('.container').length).toBe(1);
  });

  it('should contain div with class row', () => {
    expect(component.find('.row').length).toBe(1);
  });

  it('should contain divs with class col-6', () => {
    expect(component.find('.col-6').length).toBe(2);
  });

  it('should contain divs with class image', () => {
    expect(component.find('.image').length).toBe(3);
  });

  it('should contain divs with class small', () => {
    expect(component.find('.small').length).toBe(2);
  });

  it('should contain correct images', () => {
    expect(
      component
        .find('.image')
        .find('img')
        .at(0)
        .prop('src')
    ).toEqual(deals.leftImage);
    expect(
      component
        .find('.image')
        .find('img')
        .at(1)
        .prop('src')
    ).toEqual(deals.rightUpImage);
    expect(
      component
        .find('.image')
        .find('img')
        .at(2)
        .prop('src')
    ).toEqual(deals.rightDownImage);
  });

  it('should contain divs with class description', () => {
    expect(component.find('.description').length).toBe(3);
  });

  it('should contain div with class descriptionLeft', () => {
    expect(component.find('.descriptionLeft').length).toBe(1);
  });

  it('should contain div with class descriptionRightUp', () => {
    expect(component.find('.descriptionRightUp').length).toBe(1);
  });

  it('should contain div with class descriptionRightDown', () => {
    expect(component.find('.descriptionRightDown').length).toBe(1);
  });

  it('should contain correct descriptions on left image', () => {
    expect(
      component
        .find('.descriptionLeft')
        .find('h3')
        .text()
    ).toEqual(deals.leftDescription[0]);
    expect(
      component
        .find('.descriptionLeft')
        .find('h1')
        .text()
    ).toEqual(deals.leftDescription[1]);
    expect(
      component
        .find('.descriptionLeft')
        .find('h2')
        .text()
    ).toEqual(deals.leftDescription[2]);
  });

  it('should contain correct descriptions on right up image', () => {
    expect(
      component
        .find('.descriptionRightUp')
        .find('span')
        .text()
    ).toEqual(deals.rightUpDescription[0]);
    expect(
      component
        .find('.descriptionRightUp')
        .find('h4')
        .text()
    ).toEqual(deals.rightUpDescription[0] + deals.rightUpDescription[1]);
    expect(
      component
        .find('.descriptionRightUp')
        .find('h6')
        .text()
    ).toEqual(deals.rightUpDescription[2]);
    expect(
      component
        .find('.descriptionRightUp')
        .find('h3')
        .text()
    ).toEqual(deals.rightUpDescription[3]);
  });

  it('should contain correct descriptions on right down image', () => {
    expect(
      component
        .find('.descriptionRightDown')
        .find('span')
        .at(0)
        .text()
    ).toEqual(deals.rightDownDescription[0]);
    expect(
      component
        .find('.descriptionRightDown')
        .find('h5')
        .text()
    ).toEqual(deals.rightDownDescription[0] + deals.rightDownDescription[1]);
    expect(
      component
        .find('.descriptionRightDown')
        .find('h6')
        .text()
    ).toEqual(
      deals.rightDownDescription[2] +
        deals.rightDownDescription[3] +
        deals.rightDownDescription[4]
    );
    expect(
      component
        .find('.descriptionRightDown')
        .find('span')
        .at(1)
        .text()
    ).toEqual(deals.rightDownDescription[3]);
  });
});
