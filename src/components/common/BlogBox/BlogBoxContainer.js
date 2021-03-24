import { connect } from 'react-redux';
import BlogBox from './BlogBox.js';
import { getAll } from '../../../redux/blogRedux';

const mapStateToProps = (state, props) => ({
  blogboxes: getAll(state, props),
});

export default connect(mapStateToProps)(BlogBox);
