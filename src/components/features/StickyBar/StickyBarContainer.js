import { connect } from 'react-redux';
import { getComparison, removeItem } from '../../../redux/productsRedux';
import StickyBar from './StickyBar.js';

const mapStateToProps = state => ({
  products: getComparison(state),
});

const mapDispatchToProps = dispatch => ({
  removeItem: value => dispatch(removeItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StickyBar);
