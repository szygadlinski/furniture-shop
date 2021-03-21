import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';
import { getAll, toggleFavorite } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: product => dispatch(toggleFavorite(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
