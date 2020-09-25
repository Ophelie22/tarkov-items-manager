import { connect } from 'react-redux';
import CreateAccount from '../components/Header/CreateAccount';
import { createAccountInputChange, registerAccount } from '../actions';

const mapState = (state) => ({

  createData: state.createAccount.createData,
  loading: state.createAccount.loading,
  errorMessage: state.createAccount.errorMessage,
  successMessage: state.createAccount.successMessage,
  redirect: state.createAccount.redirect,
});

const mapDispatch = (dispatch) => ({
  onChange: (changeData) => {
    dispatch(createAccountInputChange(changeData));
  },

  submitFormCreateAccount: () => {
    console.log('je submit le formulaire de création');
    dispatch(registerAccount());
    console.log(`----------------${registerAccount}`);
  },

});

export default connect(mapState, mapDispatch)(CreateAccount);
