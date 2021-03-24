import { connect } from 'react-redux';

import Gallery from './Gallery';

import {
  getNew,
  getProductForPrice,
  getOnSale,
  getMinRate,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  featured: getNew(state),
  top_seller: getProductForPrice(state, 0, 30),
  sale: getOnSale(state),
  top_rated: getMinRate(state, 3),
});

export default connect(mapStateToProps)(Gallery);
