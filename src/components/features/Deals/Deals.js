import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deals.module.scss';

class Deals extends React.Component {
  static propTypes = {
    deals: PropTypes.objectOf(
      PropTypes.shape({
        leftImage: PropTypes.string,
        leftDescription: PropTypes.arrayOf(PropTypes.string),
        rightUpImage: PropTypes.string,
        rightUpDescription: PropTypes.arrayOf(PropTypes.string),
        rightDownImage: PropTypes.string,
        rightDownDescription: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  };

  static defaultProps = {
    deals: {
      leftImage: '',
      leftDescription: [],
      rightUpImage: '',
      rightUpDescription: [],
      rightDownImage: '',
      rightDownDescription: [],
    },
  };

  render() {
    const { deals } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.image}>
                <img src={deals.leftImage} alt='deal1' />
                <div className={styles.description + ' ' + styles.descriptionLeft}>
                  <h3>{deals.leftDescription[0]}</h3>
                  <h1>{deals.leftDescription[1]}</h1>
                  <h2>{deals.leftDescription[2]}</h2>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className={styles.image + ' ' + styles.small}>
                <img src={deals.rightUpImage} alt='deal2' />
                <div className={styles.description + ' ' + styles.descriptionRightUp}>
                  <h4>
                    <span>{deals.rightUpDescription[0]}</span>
                    {deals.rightUpDescription[1]}
                  </h4>
                  <h6>{deals.rightUpDescription[2]}</h6>
                  <h3>{deals.rightUpDescription[3]}</h3>
                </div>
              </div>

              <div className={styles.image + ' ' + styles.small}>
                <img src={deals.rightDownImage} alt='deal3' />
                <div className={styles.description + ' ' + styles.descriptionRightDown}>
                  <h5>
                    <span>{deals.rightDownDescription[0]}</span>
                    {deals.rightDownDescription[1]}
                  </h5>
                  <h6>
                    {deals.rightDownDescription[2]}
                    <span>{deals.rightDownDescription[3]}</span>
                    {deals.rightDownDescription[4]}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Deals;
