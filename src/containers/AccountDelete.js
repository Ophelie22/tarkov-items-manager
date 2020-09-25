import { connect } from 'react-redux';
import AccountDelete from '../components/Header/LoginForm/PlayerAccount/AccountDelete';
import { deleteAccountSubmit } from '../actions';

const mapState = (state) => ({
  loginData: state.loginForm.loginData,
  // id: state.account.id,
  loading: state.loginForm.loading,
  deleteErrorMessage: state.loginForm.deleteErrorMessage,
  isLogged: state.loginForm.isLogged,
  redirect: state.loginForm.redirect,

});

const mapDispatch = (dispatch) => ({
  deleteAccount: () => {
    console.log('je submit le bouton delete');
    dispatch(deleteAccountSubmit());
  },
});

export default connect(mapState, mapDispatch)(AccountDelete);
