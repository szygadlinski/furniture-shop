import React from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  return <div>{children}</div>;
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;
