import {
  CREATE_ACCOUNT_INPUT_CHANGE,
  REGISTER_ACCOUNT,
  CREATE_ACCOUNT_FAILED,
  CREATE_ACCOUNT_SUCCESS,
}
  from '../actions';

const initialState = {
  createData: {
    email: '',
    password: '',
    passwordConfirm: '',
    loading: false,
    errorMessage: '',
    successMessage: '',
    redirect: false,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ACCOUNT_INPUT_CHANGE:
      return {
        ...state,
        createData: {
          ...state.createData,
          ...action.payload,
        },
      };
    case REGISTER_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'your account has been created',

      };
    case CREATE_ACCOUNT_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: "can't create account",

      };

    default:
      return state;
  }
};
