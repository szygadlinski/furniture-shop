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

  const slides = [];
  const sliderStep = 1;

  /* State */
  const [isSlideFading, setSlideFading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  // const [sliderOffset, setSliderOffset] = useState(0);

  /* Dots functionality */
  const handleSlideChange = newIndex => {
    setSlideFading(true);
    setTimeout(() => {
      setActiveSlide(newIndex);
    }, 300);
    setTimeout(() => {
      setSlideFading(false);
    }, 500);
  };

  const handleSliderForward = event => {
    event.preventDefault();
    console.log('move slider forward');
  };

  const handleSliderBackward = event => {
    event.preventDefault();
    console.log('move slider back');
  };

  return (
    <div className={classes.join(' ')}>
      <div className={styles.slider}>
        <div className={styles.slideList}>
          <div className={styles.slideListInner}>
            {React.Children.map(children, (child, i) => (
              <div
                key={i}
                // className={
                //   styles.slide +
                // (isSlideFading ? ` ${styles.fadeout}` : ` ${styles.fadein}`)
                // }
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <Button className={styles.button}>
          <span>&lt;</span>
        </Button>
        <Button className={styles.button}>
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
