import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  render() {
    const { feedbacks } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.feedbackBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>
                  <li className={styles.dot}>
                    <a className={styles.active} href='#'>
                      page
                    </a>
                  </li>
                  <li className={styles.dot}>
                    <a href='#'>page</a>
                  </li>
                  <li className={styles.dot}>
                    <a href='#'>page</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={'row ' + styles.feedbackRow}>
          {feedbacks.map(feedback => {
            return (
              <div className={styles.feedbackBox} key={feedback.id}>
                <div className={styles.icon}>
                  <img src={feedback.icon} alt='' />
                </div>
                <div className={styles.quote}>{feedback.quote}</div>
                <div className={styles.imageName}>
                  <div className={styles.imageBox}>
                    <img src={feedback.image} alt='' />
                  </div>
                  <div className={styles.nameBox}>{feedback.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      quote: PropTypes.string,
      image: PropTypes.node,
      name: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
