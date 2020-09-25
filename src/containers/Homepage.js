import { connect } from 'react-redux';
import Homepage from '../components/HomePage';

const mapState = (state) => ({
  followedList: state.follow.followedList,
  followedListHideout: state.follow.followedListHideout,
  isLogged: state.loginForm.isLogged,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Homepage);
