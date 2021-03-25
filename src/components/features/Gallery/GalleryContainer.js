import { connect } from 'react-redux';

import Gallery from './Gallery';
import { getDeviceType } from '../../../redux/deviceTypeRedux.js';
import {
  getNew,
  getProductForPrice,
  getOnSale,
  getMinRate,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  featured: getNew(state),
  topSeller: getProductForPrice(state, 0, 30),
  sale: getOnSale(state),
  topRated: getMinRate(state, 3),
  deviceType: getDeviceType(state),
});

export default connect(mapStateToProps)(Gallery);
