import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Swipeable from '../Swipeable/Swipeable';

import styles from './Slider.module.scss';

const Slider = ({
  children,
  className: propClassName,
  noButtons,
  autoPlay,
  interval = 2,
  noDots,
  dotsStyle,
  buttonsStyle,
}) => {
  const classes = [styles.root];
  if (propClassName) classes.push(propClassName);

  const sliderCount = React.Children.count(children);
  const sliderStep = 1;

  /* State */
  const [isSlideFading, setSlideFading] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [pause, setPause] = useState(interval);

  /* Autoplay */
  const autoPlayRef = useRef();

  useEffect(() => {
    if (autoPlay) autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlay) autoPlayRef.current();
    };

    const autoplayFunc = setInterval(play, pause * 1000);
    return () => clearInterval(autoplayFunc);
  }, [autoPlay, pause]);

  const nextSlide = () => {
    if (activeSlideIndex === sliderCount - 1) {
      return handleSlideChange(0);
    }

    handleSlideChange(activeSlideIndex + 1);
    setPause(interval);
  };

  /* Slider controls */
  const handleSlideChange = newIndex => {
    setSlideFading(true);
    setTimeout(() => {
      setActiveSlideIndex(newIndex);
    }, 300);
    setTimeout(() => {
      setSlideFading(false);
    }, 500);
  };

  const handleDotsClick = newIndex => {
    if (autoPlay) setPause(10);
    handleSlideChange(newIndex);
  };

  const handleSliderForward = event => {
    if (event) event.preventDefault();
    if (autoPlay) setPause(10);
    if (activeSlideIndex + 1 < sliderCount) {
      handleSlideChange(activeSlideIndex + sliderStep);
    }
  };

  const handleSliderBackward = event => {
    if (event) event.preventDefault();
    if (autoPlay) setPause(10);
    if (activeSlideIndex - 1 >= 0) {
      handleSlideChange(activeSlideIndex - sliderStep);
    }
  };

  const dots = noDots ? null : (
    <div className={styles.dots} style={dotsStyle}>
      {[...Array(sliderCount).keys()].map(key => (
        <div
          key={key}
          className={styles.dot + (key === activeSlideIndex ? ` ${styles.active}` : '')}
          onClick={() => handleDotsClick(key)}
        ></div>
      ))}
    </div>
  );

  const buttons = noButtons ? null : (
    <div className={styles.buttons} style={buttonsStyle}>
      <Button className={styles.button} onClick={event => handleSliderBackward(event)}>
        <span>&lt;</span>
      </Button>
      <Button className={styles.button} onClick={event => handleSliderForward(event)}>
        <span>&gt;</span>
      </Button>
    </div>
  );

  return (
    <Swipeable
      className={styles.swipeable}
      leftAction={handleSliderForward}
      rightAction={handleSliderBackward}
    >
      <div className={classes.join(' ')}>
        {dots}
        <div className={styles.slider}>
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
        {buttons}
      </div>
    </Swipeable>
  );
};

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  noButtons: PropTypes.bool,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  noDots: PropTypes.bool,
  dotsStyle: PropTypes.object,
  buttonsStyle: PropTypes.object,
};

export default Slider;
