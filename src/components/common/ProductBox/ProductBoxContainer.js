import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';
import {
  getAll,
  toggleFavorite,
  compareItems,
  toggleColour,
  toggleStar,
  hoverStar,
} from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: product => dispatch(toggleFavorite(product)),
  compareItems: product => dispatch(compareItems(product)),
  toggleColour: value => dispatch(toggleColour(value)),
  toggleStar: value => dispatch(toggleStar(value)),
  hoverStar: value => dispatch(hoverStar(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
