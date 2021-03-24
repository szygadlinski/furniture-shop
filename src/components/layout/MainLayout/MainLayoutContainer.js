import { connect } from 'react-redux';
import MainLayout from './MainLayout.js';
import { getDeviceType, determineWindowWidth } from '../../../redux/deviceTypeRedux.js';

const mapStateToProps = state => ({
  deviceType: getDeviceType(state),
});

const mapDispatchToProps = dispatch => ({
  determineWindowWidth: window => dispatch(determineWindowWidth(window)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
