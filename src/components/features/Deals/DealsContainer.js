import { connect } from 'react-redux';
import Deals from './Deals';
import { getAllDeals } from '../../../redux/dealsRedux';

const mapStateToProps = state => ({
  deals: getAllDeals(state),
});

export default connect(mapStateToProps)(Deals);
