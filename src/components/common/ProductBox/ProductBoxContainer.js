import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';

import { addProduct } from '../../../redux/cartRedux';
import { compareItems } from '../../../redux/productsRedux';
import { isFavorite, addFavorite, removeFavorite } from '../../../redux/favoritesRedux';

const mapStateToProps = (state, { id }) => ({
  isFavorite: isFavorite(state, id),
});

const mapDispatchToProps = dispatch => ({
  compareItems: product => dispatch(compareItems(product)),
  toggleStar: value => dispatch(toggleStar(value)),
  addToCart: product => dispatch(addProduct(product)),
  addFavorite: id => dispatch(addFavorite(id)),
  removeFavorite: id => dispatch(removeFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
