import {
  PATCH_FOLLOW_QUEST,
  PATCH_FOLLOW_ERROR_QUEST,
  PATCH_FOLLOW_SUCCESS_QUEST,
  GET_FOLLOWED,
  GET_FOLLOWED_ERROR,
  GET_FOLLOWED_SUCCESS,
  PATCH_FOLLOW_HIDEOUT,
  PATCH_FOLLOW_ERROR_HIDEOUT,
  PATCH_FOLLOW_SUCCESS_HIDEOUT,
  GET_FOLLOWED_HIDEOUT,
  GET_FOLLOWED_HIDEOUT_ERROR,
  GET_FOLLOWED_HIDEOUT_SUCCESS,
  FOLLOW_CHECK,
} from '../actions';

const initialState = {

  questsFollowStatus: {},
  idQuestToFollow: '',
  successResponse: '',
  errorResponse: '',
  followObject: {},
  followedList: [],
  followedLoading: false,
  followedError: '',
  checked: [],
  HideoutFollowStatus: {},
  idHideoutToFollow: '',
  followObjectHideout: {},
  followedListHideout: [],
  followedLoadingHideout: false,
  followedErrorHideout: '',
  checkedHideout: [],
  followCheckValue: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PATCH_FOLLOW_QUEST:
      return {
        ...state,
        idQuestToFollow: action.payload,
        questsFollowStatus: {
          ...state.questsFollowStatus,
          // eslint-disable-next-line max-len
          [action.payload]: !state.questsFollowStatus[action.payload],
        },
        followObject: state.questsFollowStatus[action.payload] ? { follow: 'false' } : { follow: true },
        checked: {
          ...state.checked,
          // eslint-disable-next-line max-len
          [action.payload]: state.questsFollowStatus[action.payload] ? true : false,
        },
      };

    case PATCH_FOLLOW_ERROR_QUEST:
      return {
        ...state,
        errorResponse: action.payload,
      };

    case PATCH_FOLLOW_SUCCESS_QUEST:
      return {
        ...state,
        successResponse: action.payload,
      };
    case GET_FOLLOWED:
      return {
        ...state,
        followedLoading: true,
      };
    case GET_FOLLOWED_ERROR:
      return {
        ...state,
        followedError: action.payload,
        followedLoading: false,
      };
    case GET_FOLLOWED_SUCCESS:
      return {
        ...state,
        followedList: [...action.payload],
        followedLoading: false,
      };
    case PATCH_FOLLOW_HIDEOUT:
      return {
        ...state,
        idHideoutToFollow: action.payload,
        HideoutFollowStatus: {
          ...state.HideoutFollowStatus,
          // eslint-disable-next-line max-len
          [action.payload]: !state.HideoutFollowStatus[action.payload],
        },
        followObjectHideout: state.HideoutFollowStatus[action.payload] ? { follow: 'false' } : { follow: true },
        checkedHideout: {
          ...state.checkedHideout,
          // eslint-disable-next-line max-len
          [action.payload]: state.HideoutFollowStatus[action.payload] ? true : false,
        },
      };

    case PATCH_FOLLOW_ERROR_HIDEOUT:
      return {
        ...state,
        errorResponse: action.payload,
      };

    case PATCH_FOLLOW_SUCCESS_HIDEOUT:
      return {
        ...state,
        successResponse: action.payload,
      };
    case GET_FOLLOWED_HIDEOUT:
      return {
        ...state,
        followedLoadingHideout: true,
      };
    case GET_FOLLOWED_HIDEOUT_ERROR:
      return {
        ...state,
        followedErrorHideout: action.payload,
        followedLoadingHideout: false,
      };
    case GET_FOLLOWED_HIDEOUT_SUCCESS:
      return {
        ...state,
        followedListHideout: [...action.payload],
        followedLoadingHideout: false,
      };
    case FOLLOW_CHECK:
      return {
        ...state,
        followCheckValue: !state.followCheckValue,
      };
    default:
      return state;
  }
};
