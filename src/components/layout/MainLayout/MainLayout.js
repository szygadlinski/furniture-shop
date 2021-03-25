import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StickyBar from '../../features/StickyBar/StickyBarContainer.js';

export function get_window_width() {
  let window_width = document.documentElement.clientWidth;
  return window_width;
}

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    determineWindowWidth: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.props.determineWindowWidth(get_window_width());
    window.addEventListener('resize', () =>
      this.props.determineWindowWidth(get_window_width())
    );
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <StickyBar />
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
