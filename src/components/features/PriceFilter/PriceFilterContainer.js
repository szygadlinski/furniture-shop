import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import PriceFilter from './PriceFilter';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(PriceFilter);
