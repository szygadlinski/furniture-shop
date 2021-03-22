import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StickyBar from '../../features/StickyBar/StickyBarContainer.js';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <StickyBar />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
