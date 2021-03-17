import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = event => {
    setTouchStart(event.clientX);
  };

  const handleTouchEnd = event => {
    if (touchStart - event.clientX > 150) {
      // left swipe
      console.log('left swipe');
    }

    if (touchStart - event.clientX < -150) {
      //  right swipe
      console.log('right swipe');
    }
  };

  return (
    <div
      onTouchStart={event => handleTouchStart(event)}
      onTouchEnd={event => handleTouchEnd(event)}
      onMouseDown={event => handleTouchStart(event)}
      onMouseUp={event => handleTouchEnd(event)}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;
