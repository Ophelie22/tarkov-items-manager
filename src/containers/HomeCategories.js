import { connect } from 'react-redux';
import HomeCategories from '../components/HomePage/HomeCategories';

const mapState = (state) => ({
  open: state.toggler.open,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(HomeCategories);
