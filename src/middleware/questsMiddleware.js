import axios from 'axios';
import {
  GET_DEALERS,
  getDealersSuccess,
  getDealersError,
  GET_COUNT_QUEST,
  getCountQuestsSuccess,
  getCountQuestsError,
} from '../actions';

const questsMiddleware = (store) => (next) => (action) => {
  const playerID = store.getState().loginForm.id;
  next(action);
  switch (action.type) {
    case GET_DEALERS:
      axios({
        method: 'get',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/dealers',
      })
        .then((res) => {
          store.dispatch(getDealersSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getDealersError("Impossible de récupérer les dealers..."));
        });
      break;
    case GET_COUNT_QUEST:
      axios({
        method: 'get',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/questscount',
      })
        .then((res) => {
          console.log(res.data);
          const countObject = {};
          res.data.forEach((element) => {
            const formatData = { [element.item_id]: element.count };
            Object.assign(countObject, formatData);
          });
          console.log(countObject, 'countobject');
          store.dispatch(getCountQuestsSuccess(countObject));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getCountQuestsError('Impossible de récupérer les counts des quêtes...'));
        });
      break;
    default:
      return;
  }
};

export default questsMiddleware;
