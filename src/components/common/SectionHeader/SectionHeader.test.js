import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  it('renders without crashing', () => {
    shallow(<SectionHeader />);
  });

  it('renders title text', () => {
    const expectedTitle = 'text';
    const component = shallow(<SectionHeader title={expectedTitle} />);
    expect(component.find('.title').text()).toEqual(expectedTitle);
  });
});
