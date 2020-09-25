import { connect } from 'react-redux';
import PlayerAccount from '../components/Header/LoginForm/PlayerAccount';

const mapState = (state) => ({

  loginData: state.loginForm.loginData,
  // email: state.loginForm.loginData.email,
  id: state.loginForm.id,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(PlayerAccount);
