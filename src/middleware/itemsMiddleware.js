import axios from 'axios';

import {
  GET_ITEMS,
  getItemsSuccess,
  getItemsError,
  INCREMENT_COUNTER_QUEST,
  DECREMENT_COUNTER_QUEST,
  INCREMENT_COUNTER_HIDEOUT,
  DECREMENT_COUNTER_HIDEOUT,
} from '../actions';

const itemsMiddleware = (store) => (next) => (action) => {
  const playerID = store.getState().loginForm.id;
  next(action);
  switch (action.type) {
    case GET_ITEMS:
      axios({
        method: 'get',
        url: 'https://tarkov-market.com/api/v1/items/all',
        headers: {'x-api-key': 'Yjp3zIiyLX1qdgxA'},
      })
        .then((res) => {
          store.dispatch(getItemsSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getItemsError('Impossible de récupérer les items...'));
        });
      break;
    case INCREMENT_COUNTER_QUEST:
      axios({
        method: 'patch',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/quests/' + action.elementId + '/items/' + action.id,
        data: {
          "count" : store.getState().counter.itemsCountQuest[action.id]
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
      break;
    case DECREMENT_COUNTER_QUEST:
      axios({
        method: 'patch',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/quests/' + action.elementId + '/items/' + action.id,
        data: {
          "count" : store.getState().counter.itemsCountQuest[action.id]
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
      break;
    case INCREMENT_COUNTER_HIDEOUT:
      axios({
        method: 'patch',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/hideoutobjectives/' + action.elementId + '/items/' + action.id,
        data: {
          "count" : store.getState().counter.itemsCountHideout[action.id]
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
      break;
    case DECREMENT_COUNTER_HIDEOUT:
      axios({
        method: 'patch',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/hideoutobjectives/' + action.elementId + '/items/' + action.id,
        data: {
          "count" : store.getState().counter.itemsCountHideout[action.id]
        },
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
      break;
    default:
      return;
  }
};

export default itemsMiddleware;
