import React from 'react';
import { shallow } from 'enzyme';
import Account from './Account';

describe('Account', () => {
  it('renders without crashing', () => {
    shallow(
      <Account match={{ params: { pageId: 'id' }, isExact: true, path: '', url: '' }} />
    );
  });
});
