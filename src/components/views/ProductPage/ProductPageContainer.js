import {connect} from 'react-redux';
import ProductPage from './ProductPage';
import {getProductById, getAll} from '../../../redux/productsRedux';

const imageSource = image => {
  if(image.startsWith('http')) {
    return image;
  } else {
    return '../' + image;
  }
};

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.match.params.productId);

  return{
    ...product,
    image: imageSource(product.image),
    products: getAll(state),
  };
};

export default connect(mapStateToProps)(ProductPage);
