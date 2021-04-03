import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/Banner.js';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilter';
import ColorFilter from '../../features/ColorFilter/ColorFilter';
import PriceFilter from '../../features/PriceFilter/PriceFilterContainer';
import SizeFilter from '../../features/SizeFilter/SizeFilter';
import TagFilter from '../../features/TagFilter/TagFilterContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';
import ProductBox from '../../features/ProductBox/ProductBoxContainer';

class ProductList extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    products: PropTypes.arrayOf(PropTypes.object),
    productsFilteredByPrice: PropTypes.arrayOf(PropTypes.object),
  };

  render(){
    const { /*categories, products,*/ productsFilteredByPrice } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <Banner />

          <div className='row'>
            <div className='col-9'>
              {/*{categories.map(category => (
                category.id === match.params.id
              ?
              <div>*/}

              <div className={styles.header}>
                <div className={styles.title}>
                  <h4>{'category.name'}</h4>{' '}
                  {/* apostrofy do usunięcia po dodaniu funkcjonalności */}
                </div>

                <div className={styles.displayOptions}>
                  <div className={styles.productsSorting}>
                    <label>Sort By</label>
                    <div className={styles.select + ' ' + styles.orderSelect}>
                      ---
                      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                      <ul className={styles.productsOrder}>
                        <li>Price: Lowest first</li>
                        <li>Price: Highest first</li>
                        <li>Rating: Highest first</li>
                        <li>Rating: Lowest first</li>
                        <li>Name: A to Z</li>
                        <li>Name: Z to A</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.productsSorting}>
                    <label>Show</label>
                    <div className={styles.select + ' ' + styles.amountSelect}>
                      ---
                      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                      <ul className={styles.productsAmount}>
                        <li>12</li>
                        <li>24</li>
                        <li>36</li>
                        <li>48</li>
                        <li>60</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.displayType}>
                    <FontAwesomeIcon className={styles.icon} icon={faThLarge} />
                    <FontAwesomeIcon className={styles.icon} icon={faThList} />
                  </div>
                </div>
              </div>

              <div className={styles.products}>
                <div className='row'>
                  {productsFilteredByPrice.map(item => (
                    <div key={item.id} className='col-12 col-md-6 col-lg-4'>
                      <ProductBox {...item} />
                    </div>
                  ))}
                </div>
              </div>

              {/*</div>
              :
              <div>
                <h2>Page not found :(</h2>
              </div>
                  ))}*/}
            </div>
            <div className='col-3'>
              <CategoryFilter />
              <ColorFilter />
              <PriceFilter />
              <SizeFilter />
              <TagFilter />
            </div>
          </div>
        </div>

        <Feedback />
        <Brands />
      </div>
    );
  }
}

export default ProductList;
