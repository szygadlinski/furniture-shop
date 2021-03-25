import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    visible: true,
    isFading: false,
  };

  changeActivePage = (activePage, change) => {
    if (change === 1) {
      return this.setState({
        activePage: activePage + 1,
      });
    } else if (change === -1) {
      return this.setState({
        activePage: activePage - 1,
      });
    }
  };

  handlePageChange(newPage) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 500);
    setTimeout(() => {
      this.setState({ isFading: false });
    }, 500);
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage, isFading } = this.state;
    const dots = [];

    for (let i = 0; i < feedbacks.length; i++) {
      dots.push(
        <li key={i}>
          <div
            className={i === activePage ? styles.active : ''}
            onClick={() => this.handlePageChange(i)}
          >
            {i}
          </div>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.feedbackBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            activePage={this.state.activePage}
            changeActivePage={(currentPage, change) => {
              if (change === 1) {
                return this.setState({
                  activePage:
                    currentPage === dots.length - 1 ? currentPage : currentPage + 1,
                });
              } else if (change === -1) {
                return this.setState({
                  activePage: currentPage === 0 ? currentPage : currentPage - 1,
                });
              }
            }}
          >
            <div
              className={
                'row ' +
                styles.feedbackRow +
                (isFading ? ' ' + styles.fadeout : ' ' + styles.fadein)
              }
            >
              {feedbacks.slice(activePage * 1, (activePage + 1) * 1).map(feedback => (
                <div className={styles.feedbackBox} key={feedback.id}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div>
                  <div className={styles.quote}>{feedback.quote}</div>
                  <div className={styles.imageName}>
                    <div className={styles.imageBox}>
                      <img src={feedback.image} alt='' />
                    </div>
                    <div className={styles.nameBox}>{feedback.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </Swipeable>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  children: PropTypes.node,
  feedbacks: PropTypes.array,
};

export default Feedback;
