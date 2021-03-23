import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';
import { addProduct } from '../../../redux/cartRedux';
import { compareItems } from '../../../redux/productsRedux';
import {
  isFavourite,
  addFavourite,
  removeFavourite,
} from '../../../redux/favouritesRedux';

const mapStateToProps = (state, { id }) => ({
  isFavourite: isFavourite(state, id),
});

const mapDispatchToProps = dispatch => ({
  compareItems: product => dispatch(compareItems(product)),
  addToCart: product => dispatch(addProduct(product)),
  addFavourite: id => dispatch(addFavourite(id)),
  removeFavourite: id => dispatch(removeFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
