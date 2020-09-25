import { connect } from 'react-redux';
import App from '../components/App';
import {
  getItems,
  getFollowed,
  getFollowedHideout,
  getHideouts,
  getDealers,
  checkAuth,
  getCountQuests,
  getCountHideout,
} from '../actions';

const mapState = (state) => ({

  isLogged: state.loginForm.isLogged,

});

const mapDispatch = (dispatch) => ({
  getItems: () => {
    console.log('Je dois aller chercher les items');
    dispatch(getItems());
  },
  getFollowed: () => {
    console.log('Je dois aller chercher les quetes followed');
    dispatch(getFollowed());
  },
  getFollowedHideout: () => {
    console.log('Je dois aller chercher les hideout followed');
    dispatch(getFollowedHideout());
  },
  getHideouts: () => {
    console.log('Je dois aller chercher le hideout');
    dispatch(getHideouts());
  },
  getDealers: () => {
    console.log('Je dois aller chercher les dealers');
    dispatch(getDealers());
  },
  checkAuth: () => {
    console.log('je dois vérifier l\'auth');
    dispatch(checkAuth());
  },
  getCountQuests: () => {
    console.log('Je dois aller chercher les counts de quêtes');
    dispatch(getCountQuests());
  },
  getCountHideout: () => {
    console.log('Je dois aller chercher les counts de quêtes');
    dispatch(getCountHideout());
  },
});

export default connect(mapState, mapDispatch)(App);
