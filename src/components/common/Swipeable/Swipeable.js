import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, mouseEvents = false, children }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [swiped, setSwiped] = useState(false);

  const handleTouchStart = event => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchMove = event => {
    if (event.changedTouches && event.changedTouches.length) {
      setSwiped(true);
    }
  };

  const handleTouchEnd = event => {
    if (swiped && touchStart - event.changedTouches[0].clientX > 150) {
      // left swipe detected
      leftAction();
    }

    if (swiped && touchStart - event.changedTouches[0].clientX < -150) {
      // right swipe detected
      rightAction();
    }
  };

  /* Mouse event handles added for testing pusposes */

  const handleClickStart = event => {
    setTouchStart(event.clientX);
  };

  const handleClickEnd = event => {
    if (touchStart - event.clientX > 150) {
      // left swipe detected
      leftAction();
    }

    if (touchStart - event.clientX < -150) {
      // right swipe detected
      rightAction();
    }
  };

  return (
    <div
      onTouchStart={event => handleTouchStart(event)}
      onTouchEnd={event => handleTouchEnd(event)}
      onTouchMove={event => handleTouchMove(event)}
      onMouseDown={mouseEvents ? event => handleClickStart(event) : undefined}
      onMouseUp={mouseEvents ? event => handleClickEnd(event) : undefined}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
  mouseEvents: PropTypes.bool,
};

export default Swipeable;
