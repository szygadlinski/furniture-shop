import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';

import {
  getAll,
  toggleFavorite,
  compareItems,
  toggleStar,
  hoverStar,
} from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: product => dispatch(toggleFavorite(product)),
  compareItems: product => dispatch(compareItems(product)),
  toggleStar: value => dispatch(toggleStar(value)),
  hoverStar: value => dispatch(hoverStar(value)),
  addToCart: product => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
