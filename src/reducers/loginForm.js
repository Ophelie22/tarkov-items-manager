import {
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
  LOGOUT_SUCCESS,
  DELETE_ACCOUNT_SUBMIT,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_ERROR,
} from '../actions';

const initialState = {

  id: '',
  loginErrorMessage: '',
  isLogged: false,
  loading: false,
  loginData: {
    email: '',
    password: '',
  },
  redirection: false,
  user: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_ACCOUNT_SUBMIT:
      return {
        ...state,
        loading: true,
        user: {},
      };

    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        redirect: true,
        isLogged: false,
        user: {},

      };

    case DELETE_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: true,
        user: {},
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        loginData: {
          email: '',
          password: '',
        },
        user: {},
      };

    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        id: action.id,
        loginData: {
          email: action.email,
          password: '',
        },
        user: action.payload,
      };

    case LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        loginErrorMessage: action.payload,
        isLogged: false,
        user: {},
      };

    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
