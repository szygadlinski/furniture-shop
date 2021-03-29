import { connect } from 'react-redux';
import CartWidget from './CartWidget';
import { getCount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  count: getCount(state),
});

export default connect(mapStateToProps)(CartWidget);
