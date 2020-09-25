import axios from 'axios';

import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError,
  LOGOUT, logoutSuccess, CHECK_AUTH, deleteAccountSuccess,
  deleteAccountError, DELETE_ACCOUNT_SUBMIT,
} from '../actions';

const logMiddleware = (store) => (next) => (action) => {
  // console.log(action);
  next(action);
  switch (action.type) {
    case DELETE_ACCOUNT_SUBMIT: {
      const { id } = store.getState().loginForm;
      axios({
        method: 'delete',
        url: `https://tarkovitemsmanagernodejs.herokuapp.com/users/${id}`,
      }).then((res) => {
        console.log(res.data);
        store.dispatch(deleteAccountSuccess());
      }).catch((err) => {
        console.log(err);
        store.dispatch(deleteAccountError(err));
      });
      break;
    }

    case CHECK_AUTH: {
      axios({
        method: 'post',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/islogged',
        //data: store.getState().loginForm.isLogged,
        withCredentials: true,
      }).then((res) => {
        // const { info } = res.data;
        console.log('------------------------------', res.data);
        if (res.data.logged) {
          store.dispatch(loginSubmitSuccess(res.data.info.id, res.data.info.email));
        }
      })
        .catch((err) => {
          store.dispatch(err);
        });
      break;
    }

    case LOGIN_SUBMIT: {
      axios({
        method: 'post',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/login',
        data: store.getState().loginForm.loginData,
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.data === 'ERROR 401 UNAUTHORIZED') {
          store.dispatch(loginSubmitError("E-mail and password doesn't matchs"));
        }
        else {
          console.log(res.data.info.id);
          console.log(res.data.info.email);
          console.log(res.data.info);

          store.dispatch(loginSubmitSuccess(res.data.info.id, res.data.info.email));
        }
      }).catch((err) => {
        console.error(err);
        store.dispatch(loginSubmitError(err, "Cet utilisateur n'existe pas"));
      });
      break;
    }

    case LOGOUT: {
      axios({
        method: 'post',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/logout',
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    }
    default:
  }
};

export default logMiddleware;
