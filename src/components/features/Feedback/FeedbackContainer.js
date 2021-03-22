import { connect } from 'react-redux';
import { getAll } from '../../../redux/feedbackRedux.js';
import Feedback from './Feedback';

const mapStateToProps = state => ({
  feedbacks: getAll(state),
});

export default connect(mapStateToProps)(Feedback);
