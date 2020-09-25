import { connect } from 'react-redux';
import LoginForm from '../components/Header/LoginForm';
import {
  loginInputChange, loginSubmit, logout,
} from '../actions';

const mapState = (state) => ({

  loginData: state.loginForm.loginData,
  loading: state.loginForm.loading,
  error: state.loginForm.loginErrorMessage,
  isLogged: state.loginForm.isLogged,
  redirection: state.loginForm.redirection,
  id: state.loginForm.id,
  user: state.loginForm.user,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changedData) => {
    console.log(changedData);
    dispatch(loginInputChange(changedData));
  },
  onFormLogin: () => {
    console.log('je submit');
    dispatch(loginSubmit());
  },

  handleLogout: () => {
    console.log('logout');
    dispatch(logout());
  },
});

export default connect(mapState, mapDispatch)(LoginForm);
