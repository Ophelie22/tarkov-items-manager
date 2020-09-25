import axios from 'axios';
import {
  REGISTER_ACCOUNT,
  createAccountSuccess,
  createAccountFailed,
} from '../actions';

const createAccountMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case REGISTER_ACCOUNT: {
      console.log(store.getState().createAccount.createData);
      axios({
        method: 'post',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/signup',
        data: store.getState().createAccount.createData,
      }).then((res) => {
        console.log(res.data);
        store.dispatch(createAccountSuccess());
      }).catch((error) => {
        console.error(error);
        store.dispatch(createAccountFailed(error));
      });
      break;
    }
    default:
      return;
  }
};

export default createAccountMiddleware;
