import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../common/Button/Button';
import { useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faShoppingBasket,
  faEnvelope,
  faPlus,
  faMinus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faPinterestP,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';


const ProductPage = ({products}) => {

  const location = useLocation();
  const currentProduct = location.state.id;
  const [currentItem, setCurrentItem] = useState([]);
  const [activeImage] = useState(0);

  useEffect(() => {
    const filteredProduct = (products || []).filter(product => {
      return product.id === currentProduct;
    });
    setCurrentItem(filteredProduct);
  }, [currentProduct, products]);

  return (
    <div className={styles.root}>
      {currentItem.map((product, index) => {
        return (
          <Grid key={index}>
            <div className={styles.productBox}>
              <Row className={styles.mainRow}>
                <Col sm={12} md={6} className={styles.photoWrapper}>
                  <Row>
                    <Col sm={12}>
                      <p className={styles.activeImage}>{activeImage}</p>
                      <img
                        className={styles.mainPhoto}
                        alt=''
                        src={`../${product.image}`}
                      ></img>
                    </Col>
                  </Row>
                  <Row className={styles.miniSliderWrapper}>
                    <Col sm={12} className={styles.miniSlider}>
                      <Button className={styles.button} variant='outlineYellow'>
                        <FontAwesomeIcon icon={faChevronLeft}>Favorite</FontAwesomeIcon>
                      </Button>
                      <div className={styles.miniPhoto}>
                        <img
                          className={styles.photo}
                          alt=''
                          src='https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg'
                        ></img>
                      </div>
                      <div className={styles.miniPhoto}>
                        <img
                          className={styles.photo}
                          alt=''
                          src='https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg'
                        ></img>
                      </div>
                      <div className={styles.miniPhoto}>
                        <img
                          className={styles.photo}
                          alt=''
                          src='https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg'
                        ></img>
                      </div>
                      <Button className={styles.button} variant='outlineYellow'>
                        <FontAwesomeIcon icon={faChevronRight}>Favorite</FontAwesomeIcon>
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6}>
                  <div className={styles.productDetailsSection}>
                    <Row className={styles.headerRow}>
                      <Col>
                        <h5>{product.name}</h5>
                        <p> From Brw manufactor</p>
                      </Col>
                      <Col>
                        <Button className={styles.button} variant='outlineYellow'>
                          <FontAwesomeIcon icon={faChevronLeft}>Favorite</FontAwesomeIcon>
                        </Button>
                        <Button className={styles.button} variant='outlineYellow'>
                          <FontAwesomeIcon icon={faChevronRight}>Favorite</FontAwesomeIcon>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className={styles.review}>
                          <div className={styles.stars}>
                            <FontAwesomeIcon
                              icon={faStar}
                              className={styles.iconStar}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className={styles.iconStar}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className={styles.iconStar}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className={styles.iconStar}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon
                              icon={faStar}
                              className={styles.iconStar}
                            ></FontAwesomeIcon>
                          </div>
                          <p>(2 reviews)</p>
                          <Button variant='outline' className={styles.reviewButton}>
                            Add your review
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.productDetailsSection}>
                    <Row>
                      <div className={styles.priceWrapper}>
                        <div className={styles.olderPrice}>$450</div>
                        <div className={styles.newestPrice}>$350</div>
                      </div>
                    </Row>
                  </div>

                  <div className={styles.productDetailsSection}>
                    <Row className={styles.buttonsWrapper}>
                      <div>
                        <div className={styles.buttons}>
                          <Button className={styles.oneButton} variant='outlineYellow'>
                            <FontAwesomeIcon
                              icon={faShoppingBasket}
                              className={styles.icon}
                            ></FontAwesomeIcon>
                          Add to cart
                          </Button>
                          <Button className={styles.oneButton} variant='outlineYellow'>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          </Button>
                          <Button className={styles.oneButton} variant='outlineYellow'>
                            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                          </Button>
                          <Button className={styles.oneButton} variant='outlineYellow'>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                      <div className={styles.quantity}>
                        <p>Quantity :</p>
                        <input
                          className={styles.inputSmall}
                          type='number'
                          placeholder='1' /*value={count}*/
                        ></input>
                        <Button variant='outlineYellow'>
                          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                        </Button>
                        <Button variant='outlineYellow'>
                          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </Button>
                      </div>
                    </Row>
                  </div>

                  <div className={styles.productDetailsSection}>
                    <Row className={styles.detailsContent}>
                      <h5>Quick Overview</h5>
                      <p>
                        Vivamus nec elit posuere mauris ornare ultricies non iaculis quam.
                        Morbi aliquam felis non tincidunt ultricies. Aliquam facilisis metus
                        at dignissim sollicitudin. Ut gravida, lacus at consectetur pharetra,
                        lectus nunc bibendum enim, ac consequat massa diam non quam.{' '}
                      </p>
                    </Row>
                  </div>

                  <div className={styles.productDetailsSection}>
                    <Row className={styles.details}>
                      <div className={styles.availability}>
                        <h6>Availability:</h6>
                        <p>In stock</p>
                      </div>
                      <div className={styles.category}>
                        <h6>Category:</h6>
                        <p>Furniture</p>
                      </div>
                    </Row>
                  </div>

                  <div className={styles.productDetailsSection}>
                    <Row>
                      <div>
                        <div className={styles.social}>
                          <Button className={styles.media} variant='outlineFacebook'>
                            <FontAwesomeIcon
                              icon={faFacebookF}
                              className={styles.socialIcon}
                            ></FontAwesomeIcon>
                              Share
                          </Button>
                          <Button className={styles.media} variant='outlineGoogle'>
                            <FontAwesomeIcon
                              icon={faGooglePlusG}
                              className={styles.socialIcon}
                            ></FontAwesomeIcon>
                            Google +
                          </Button>
                          <Button className={styles.media} variant='outlineTwitter'>
                            <FontAwesomeIcon
                              icon={faTwitter}
                              className={styles.socialIcon}
                            ></FontAwesomeIcon>
                            Twitter
                          </Button>
                          <Button className={styles.media} variant='outlinePinterest'>
                            <FontAwesomeIcon
                              icon={faPinterestP}
                              className={styles.socialIcon}
                            ></FontAwesomeIcon>
                          Pinterest
                          </Button>
                          <Button className={styles.media} variant='outlineLinkedIn'>
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className={styles.socialIcon}
                            ></FontAwesomeIcon>
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>


          </Grid>
        );
      })}

      <div className='container'>
        <div className={'row ' + styles.rowrow}>
          <NewFurniture rowSize={4} />
          <Feedback />
          <Brands />
        </div>
      </div>
    </div>
  );
};



ProductPage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  products: PropTypes.array,
};

export default ProductPage;
