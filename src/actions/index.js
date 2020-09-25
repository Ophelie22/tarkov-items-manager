export const INCREMENT_COUNTER_QUEST = 'INCREMENT_COUNTER_QUEST';
export const DECREMENT_COUNTER_QUEST = 'DECREMENT_COUNTER_QUEST';
export const INCREMENT_COUNTER_HIDEOUT = 'INCREMENT_COUNTER_HIDEOUT';
export const DECREMENT_COUNTER_HIDEOUT = 'DECREMENT_COUNTER_HIDEOUT';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
export const OPEN_MENU = 'OPEN_MENU';
export const SEARCH_ITEM = 'SEARCH_ITEM';
export const GET_DEALERS = 'GET_DEALERS';
export const GET_DEALERS_SUCCESS = 'GET_DEALERS_SUCCESS';
export const GET_DEALERS_ERROR = 'GET_DEALERS_ERROR';
export const GET_HIDEOUTS = 'GET_HIDEOUTS';
export const GET_HIDEOUTS_SUCCESS = 'GET_HIDEOUTS_SUCCESS';
export const GET_HIDEOUTS_ERROR = 'GET_HIDEOUTS_ERROR';
export const PATCH_FOLLOW_QUEST = 'PATCH_FOLLOW_QUEST';
export const PATCH_FOLLOW_SUCCESS_QUEST = 'PATCH_FOLLOW_SUCCESS_QUEST';
export const PATCH_FOLLOW_ERROR_QUEST = 'PATCH_FOLLOW_ERROR_QUEST';
export const PATCH_FOLLOW_HIDEOUT = 'PATCH_FOLLOW_HIDEOUT';
export const PATCH_FOLLOW_SUCCESS_HIDEOUT = 'PATCH_FOLLOW_SUCCESS_HIDEOUT';
export const PATCH_FOLLOW_ERROR_HIDEOUT = 'PATCH_FOLLOW_ERROR_HIDEOUT';
export const SEARCHBAR = 'SEARCHBAR';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const TOGGLE_DEALER = 'TOGGLE_DEALER';
export const CSS_DEALER = 'CSS_DEALER';
export const TOGGLE_HIDEOUT = 'TOGGLE_HIDEOUT';
export const CREATE_ACCOUNT_INPUT_CHANGE = 'CREATE_ACCOUNT_INPUT_CHANGE';
export const REGISTER_ACCOUNT = 'REGISTER_ACCOUNT';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILED = 'CREATE_ACCOUNT_FAILED';
export const GET_FOLLOWED = 'GET_FOLLOWED';
export const GET_FOLLOWED_SUCCESS = 'GET_FOLLOWED_SUCCESS';
export const GET_FOLLOWED_ERROR = 'GET_FOLLOWED_ERROR';
export const GET_FOLLOWED_HIDEOUT = 'GET_FOLLOWED_HIDEOUT';
export const GET_FOLLOWED_HIDEOUT_SUCCESS = 'GET_FOLLOWED_HIDEOUT_SUCCESS';
export const GET_FOLLOWED_HIDEOUT_ERROR = 'GET_FOLLOWED_HIDEOUT_ERROR';
export const DELETE_ACCOUNT_SUBMIT = 'DELETE_ACCOUNT_SUBMIT';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_ERROR = 'DELETE_ACCOUNT_ERROR';
export const CHECK_AUTH = 'CHECK_AUTH';
export const GET_COUNT_QUEST = 'GET_COUNT_QUEST';
export const GET_COUNT_QUEST_SUCCESS = 'GET_COUNT_QUEST_SUCCESS';
export const GET_COUNT_QUEST_ERROR = 'GET_COUNT_QUEST_ERROR';
export const GET_COUNT_HIDEOUT = 'GET_COUNT_HIDEOUT';
export const GET_COUNT_HIDEOUT_SUCCESS = 'GET_COUNT_HIDEOUT_SUCCESS';
export const GET_COUNT_HIDEOUT_ERROR = 'GET_COUNT_HIDEOUT_ERROR';
export const FOLLOW_CHECK = 'FOLLOW_CHECK';

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const deleteAccountSubmit = () => ({
  type: DELETE_ACCOUNT_SUBMIT,
});
export const deleteAccountSuccess = () => ({
  type: DELETE_ACCOUNT_SUCCESS,
});

export const deleteAccountError = () => ({
  type: DELETE_ACCOUNT_ERROR,
});

export const registerAccount = () => ({
  type: REGISTER_ACCOUNT,
});
export const createAccountFailed = () => ({
  type: CREATE_ACCOUNT_FAILED,
})
export const createAccountSuccess = () => ({
  type: CREATE_ACCOUNT_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const createAccountInputChange = (payload) => ({
  type: CREATE_ACCOUNT_INPUT_CHANGE,
  payload,
});
export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginSubmitSuccess = (id, email, payload) => ({
  type: LOGIN_SUBMIT_SUCCESS,
  id,
  email,
  payload,
});

export const loginSubmitError = (payload) => ({
  type: LOGIN_SUBMIT_ERROR,
  payload, // message error
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const searchBar = (payload) => ({
  type: SEARCHBAR,
  payload,
});

export const getItemsSuccess = (payload) => ({
  type: GET_ITEMS_SUCCESS,
  payload,
});

export const getItemsError = (payload) => ({
  type: GET_ITEMS_ERROR,
  payload,
});

export const getItems = () => ({
  type: GET_ITEMS,
});

export const getDealersSuccess = (payload) => ({
  type: GET_DEALERS_SUCCESS,
  payload,
});

export const getDealersError = (payload) => ({
  type: GET_DEALERS_ERROR,
  payload,
});

export const getDealers = () => ({
  type: GET_DEALERS,
});

export const getHideoutsSuccess = (payload) => ({
  type: GET_HIDEOUTS_SUCCESS,
  payload,
});

export const getHideoutsError = (payload) => ({
  type: GET_HIDEOUTS_ERROR,
  payload,
});

export const getHideouts = () => ({
  type: GET_HIDEOUTS,
});

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const incrementQuestItem = (id, elementId) => ({
  type: INCREMENT_COUNTER_QUEST,
  id,
  elementId,
});

export const decrementQuestItem = (id, elementId, countToSend) => ({
  type: DECREMENT_COUNTER_QUEST,
  id,
  elementId,
  countToSend,
});

export const incrementHideoutItem = (id, elementId, countToSend) => ({
  type: INCREMENT_COUNTER_HIDEOUT,
  id,
  elementId,
  countToSend,
});

export const decrementHideoutItem = (id, elementId, countToSend) => ({
  type: DECREMENT_COUNTER_HIDEOUT,
  id,
  elementId,
  countToSend,
});

export const search = (payload) => ({
  type: SEARCH_ITEM,
  payload,
});

export const toggleDealer = (payload) => ({
  type: TOGGLE_DEALER,
  payload,
});

export const toggleHideout = (payload) => ({
  type: TOGGLE_HIDEOUT,
  payload,
});

export const patchFollow = (payload) => ({
  type: PATCH_FOLLOW_QUEST,
  payload,
});

export const patchFollowQuestSuccess = (payload) => ({
  type: PATCH_FOLLOW_SUCCESS_QUEST,
  payload,
});

export const patchFollowQuestError = (payload) => ({
  type: PATCH_FOLLOW_ERROR_QUEST,
  payload,
});

export const patchFollowHideout = (payload) => ({
  type: PATCH_FOLLOW_HIDEOUT,
  payload,
});

export const patchFollowHideoutSuccess = (payload) => ({
  type: PATCH_FOLLOW_SUCCESS_HIDEOUT,
  payload,
});

export const patchFollowHideoutError = (payload) => ({
  type: PATCH_FOLLOW_ERROR_HIDEOUT,
  payload,
});

export const getFollowedSuccess = (payload) => ({
  type: GET_FOLLOWED_SUCCESS,
  payload,
});

export const getFollowedError = (payload) => ({
  type: GET_FOLLOWED_ERROR,
  payload,
});

export const getFollowed = () => ({
  type: GET_FOLLOWED,
});

export const getFollowedHideoutSuccess = (payload) => ({
  type: GET_FOLLOWED_HIDEOUT_SUCCESS,
  payload,
});

export const getFollowedHideoutError = (payload) => ({
  type: GET_FOLLOWED_HIDEOUT_ERROR,
  payload,
});

export const getFollowedHideout = () => ({
  type: GET_FOLLOWED_HIDEOUT,
});

export const getCountQuestsSuccess = (payload) => ({
  type: GET_COUNT_QUEST_SUCCESS,
  payload,
});

export const getCountQuestsError = (payload) => ({
  type: GET_COUNT_QUEST_ERROR,
  payload,
});

export const getCountQuests = () => ({
  type: GET_COUNT_QUEST,
});

export const getCountHideoutSuccess = (payload) => ({
  type: GET_COUNT_HIDEOUT_SUCCESS,
  payload,
});

export const getCountHideoutError = (payload) => ({
  type: GET_COUNT_HIDEOUT_ERROR,
  payload,
});

export const getCountHideout = () => ({
  type: GET_COUNT_HIDEOUT,
});

export const followCheck = () => ({
  type: FOLLOW_CHECK,
});
