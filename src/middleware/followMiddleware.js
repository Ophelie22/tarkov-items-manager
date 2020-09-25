import axios from 'axios';
import {
  PATCH_FOLLOW_QUEST,
  patchFollowQuestSuccess,
  patchFollowQuestError,
  GET_FOLLOWED,
  getFollowedSuccess,
  getFollowedError,
  getFollowed,
  GET_FOLLOWED_HIDEOUT,
  getFollowedHideoutSuccess,
  getFollowedHideoutError,
  getFollowedHideout,
  PATCH_FOLLOW_HIDEOUT,
  patchFollowHideoutSuccess,
  patchFollowHideoutError,
} from '../actions';

const followMiddleware = (store) => (next) => (action) => {
  const playerID = store.getState().loginForm.id;
  next(action);
  switch (action.type) {
    case PATCH_FOLLOW_QUEST: {
      axios({
        method: 'patch',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/quests/' + action.payload,
        data: store.getState().follow.followObject,
      }).then((res) => {
        console.log(res);
        store.dispatch(patchFollowQuestSuccess(res));
        store.dispatch(getFollowed());
      }).catch((err) => {
        console.error(err);
        store.dispatch(patchFollowQuestError(err));
      });
      break;
    }
    case GET_FOLLOWED: {
      axios({
        method: 'get',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/questsfollow',
      }).then((res) => {
        console.log(res.data);
        store.dispatch(getFollowedSuccess(res.data));
      }).catch((err) => {
        console.error(err);
        store.dispatch(getFollowedError(err));
      });
      break;
    }
    case PATCH_FOLLOW_HIDEOUT: {
      axios({
        method: 'patch',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/objectives/' + action.payload,
        data: store.getState().follow.followObjectHideout,
      }).then((res) => {
        console.log(res);
        store.dispatch(patchFollowHideoutSuccess(res));
        store.dispatch(getFollowedHideout());
      }).catch((err) => {
        console.error(err);
        store.dispatch(patchFollowHideoutError(err));
      });
      break;
    }
    case GET_FOLLOWED_HIDEOUT: {
      axios({
        method: 'get',
        url: 'https://tarkovitemsmanagernodejs.herokuapp.com/users/' + playerID + '/objectivesfollow',
      }).then((res) => {
        console.log(res.data);
        store.dispatch(getFollowedHideoutSuccess(res.data));
      }).catch((err) => {
        console.error(err);
        store.dispatch(getFollowedHideoutError(err));
      });
      break;
    }
    default:
      return;
  }
};

export default followMiddleware;
