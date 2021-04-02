import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';

import styles from './Slider.module.scss';

/* Custom hook for getting container width */
// const useContainerWidth = myRef => {
//   const getWidth = () => myRef.current.offsetWidth;
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(getWidth());
//     };

//     if (myRef.current) {
//       setWidth(getWidth());
//     }

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [getWidth, myRef]);

//   return width;
// };

const Slider = ({ children, className: propClassName }) => {
  const classes = [styles.root];
  if (propClassName) classes.push(propClassName);

  const sliderCount = React.Children.count(children);
  const sliderStep = 1;

  /* State */
  const [isSlideFading, setSlideFading] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  /* Dots functionality */
  const handleSlideChange = newIndex => {
    setSlideFading(true);
    setTimeout(() => {
      setActiveSlideIndex(newIndex);
    }, 300);
    setTimeout(() => {
      setSlideFading(false);
    }, 500);
  };

  const handleSliderForward = event => {
    event.preventDefault();
    if (activeSlideIndex + 1 < sliderCount) {
      handleSlideChange(activeSlideIndex + sliderStep);
    }
  };

  const handleSliderBackward = event => {
    event.preventDefault();
    if (activeSlideIndex - 1 >= 0) {
      handleSlideChange(activeSlideIndex - sliderStep);
    }
  };

  return (
    <div className={classes.join(' ')}>
      <div className={styles.slider}>
        <div className={styles.slideList}>
          <div className={styles.slideListInner}>
            {React.Children.map(
              children,
              (child, i) =>
                i === activeSlideIndex && (
                  <div
                    key={i}
                    className={
                      styles.slide +
                      (isSlideFading ? ` ${styles.fadeout}` : ` ${styles.fadein}`)
                    }
                  >
                    {child}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <Button
          className={styles.button}
          onClick={event => handleSliderBackward(event)}
        >
          <span>&lt;</span>
        </Button>
        <Button className={styles.button} onClick={event => handleSliderForward(event)}>
          <span>&gt;</span>
        </Button>
      </div>
      {/* <Button
        className={styles.button}
        onClick={event => handleSliderBackward(event)}
      >
        <span>&lt;</span>
      </Button>
      <Button
        className={styles.button}
        onClick={event => handleSliderForward(event)}
      >
        <span>&gt;</span>
      </Button> */}
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
};

export default Slider;
