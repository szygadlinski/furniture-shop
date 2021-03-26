import React from 'react';
import { shallow } from 'enzyme';
import Orders from './Orders';

describe('Orders', () => {
  it('renders without crashing', () => {
    shallow(
      <Orders match={{ params: { pageId: 'id' }, isExact: true, path: '', url: '' }} />
    );
  });
});
