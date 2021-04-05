import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getProductById, getAll } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.match.params.productId);

  return {
    ...product,
    products: getAll(state),
  };
};

export default connect(mapStateToProps)(ProductPage);
