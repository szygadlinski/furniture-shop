import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { changePrice, getCurrentPrice } from '../../../redux/priceRedux';
import PriceFilter from './PriceFilter';

const mapStateToProps = state => ({
  products: getAll(state),
  currentPrice: getCurrentPrice(state),
});

const mapDispatchToProps = dispatch => ({
  changePrice: price => dispatch(changePrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter);
