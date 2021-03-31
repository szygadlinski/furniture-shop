import { connect } from 'react-redux';

import Promoted from './Promoted';
import { getOnSale } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getOnSale(state).slice(0, 4),
});

export default connect(mapStateToProps)(Promoted);
