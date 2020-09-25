import { connect } from 'react-redux';
import Toggler from '../components/HomePage/HomeCategories/Toggler';
import { openMenu } from '../actions';

const mapState = (state) => ({
  open: state.toggler.open,
});

const mapDispatch = (dispatch) => ({
  openMenu: () => {
    dispatch(openMenu());
  },
});

export default connect(mapState, mapDispatch)(Toggler);
