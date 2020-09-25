import axios from 'axios';
import {
  GET_HIDEOUTS,
  getHideoutsSuccess,
  getHideoutsError,
  GET_COUNT_HIDEOUT,
  getCountHideoutSuccess,
  getCountHideoutError,
} from '../actions';

const hideoutMiddleware = (store) => (next) => (action) => {
  const playerID = store.getState().loginForm.id;
  next(action);
  switch (action.type) {
    case GET_HIDEOUTS:
      axios({
        method: 'get',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/categorys',
      })
        .then((res) => {
          store.dispatch(getHideoutsSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getHideoutsError("Impossible de récupérer le hideout..."));
        });
      break;
    case GET_COUNT_HIDEOUT:
      axios({
        method: 'get',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/objectivescount',
      })
        .then((res) => {
          console.log(res.data);
          const countObject = {};
          res.data.forEach((element) => {
            const formatData = { [element.item_id]: element.count };
            Object.assign(countObject, formatData);
          });
          console.log(countObject, 'countobject');
          store.dispatch(getCountHideoutSuccess(countObject));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getCountHideoutError('Impossible de récupérer les counts du hideout...'));
        });
      break;
    default:
      return;
  }
};

export default hideoutMiddleware;
