import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';
import { getAll, toggleFavorite, compareItems } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: product => dispatch(toggleFavorite(product)),
  compareItems: product => dispatch(compareItems(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
