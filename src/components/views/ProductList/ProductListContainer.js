import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, getProductsCheaperThan } from '../../../redux/productsRedux.js';

const mapStateToProps = (state, props) => ({
  categories: getAll(state, props.match.params.id),
  products: getNew(state),
  productsFilteredByPrice: getProductsCheaperThan(state),
});

export default connect(mapStateToProps)(ProductList);
