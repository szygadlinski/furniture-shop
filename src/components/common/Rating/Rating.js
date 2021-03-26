import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ id, rate, toggleStar, hoverStar, rated }) => {
  return (
    <div className={!rated ? styles.stars : styles.starsRated}>
      {[1, 2, 3, 4, 5].map((star, i) => {
        const rateValue = i + 1;
        return (
          <a key={star} href='/#'>
            <label>
              <input type='radio' name='rating' value={rateValue} />
              <FontAwesomeIcon
                onClick={() => toggleStar({ id, rateValue })}
                onMouseEnter={() => hoverStar({ id, rateValue })}
                icon={star > rate ? farStar : faStar}
              />
            </label>
          </a>
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  id: PropTypes.string,
  rate: PropTypes.number,
  toggleStar: PropTypes.func,
  hoverStar: PropTypes.func,
  rated: PropTypes.bool,
};

export default Rating;
