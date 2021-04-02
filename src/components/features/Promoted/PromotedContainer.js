import { connect } from 'react-redux';

import Promoted from './Promoted';
import { getOnSale } from '../../../redux/productsRedux.js';
import { getAllBanners } from '../../../redux/promoBannersRedux.js';

const mapStateToProps = state => ({
  products: getOnSale(state).slice(0, 3),
  banners: getAllBanners(state),
});

export default connect(mapStateToProps)(Promoted);
