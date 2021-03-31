import { connect } from 'react-redux';
import TagFilter from './TagFilter';
import { getAllTags } from '../../../redux/tagsRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
});

export default connect(mapStateToProps)(TagFilter);
