/* eslint-disable max-len */
import {
  INCREMENT_COUNTER_QUEST,
  DECREMENT_COUNTER_QUEST,
  INCREMENT_COUNTER_HIDEOUT,
  DECREMENT_COUNTER_HIDEOUT,
  GET_COUNT_QUEST,
  GET_COUNT_QUEST_SUCCESS,
  GET_COUNT_QUEST_ERROR,
  GET_COUNT_HIDEOUT,
  GET_COUNT_HIDEOUT_SUCCESS,
  GET_COUNT_HIDEOUT_ERROR,
} from '../actions';

const initialState = {
  itemsCountQuest: {},
  itemsCountHideout: {},
  questsCountList: [],
  questsCountLoading: false,
  questsCountError: '',
  hideoutCountList: [],
  hideoutCountLoading: false,
  hideoutCountError: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_COUNTER_QUEST:
      console.log('increment quest item', action.id);
      return {
        ...state,
        itemsCountQuest: {
          ...state.itemsCountQuest,
          [action.id]: (parseInt(state.itemsCountQuest[action.id], 10) + 1) || 1,
        },
        itemsCountQuestData: {
          ...state.itemsCountQuestData,
          [action.elementId]: [{
            ...state.itemsCountQuestData[action.elementId],
            ID: action.id,
            COUNT: ((parseInt(state.itemsCountQuest[action.id], 10) + 1) || 1),
          }],
        },
      };
    case DECREMENT_COUNTER_QUEST:
      console.log('decrement quest item', action.id);
      return {
        ...state,
        itemsCountQuest: {
          ...state.itemsCountQuest,
          [action.id]: state.itemsCountQuest[action.id] <= 1 ? '0' : state.itemsCountQuest[action.id] - 1,
        },
      };
    case INCREMENT_COUNTER_HIDEOUT:
      console.log('increment hideout item', action.id);
      return {
        ...state,
        itemsCountHideout: {
          ...state.itemsCountHideout,
          [action.id]: (parseInt(state.itemsCountHideout[action.id], 10) + 1) || 1,
        },
      };
    case DECREMENT_COUNTER_HIDEOUT:
      console.log('decrement hideout item', action.id);
      return {
        ...state,
        itemsCountHideout: {
          ...state.itemsCountHideout,
          [action.id]: state.itemsCountHideout[action.id] <= 1 ? '0' : state.itemsCountHideout[action.id] - 1,
        },
      };
    case GET_COUNT_QUEST:
      return {
        ...state,
        questsCountLoading: true,
      };
    case GET_COUNT_QUEST_SUCCESS:
      return {
        ...state,
        itemsCountQuest: action.payload,
        questsCountError: '',
        questsCountLoading: false,
      };
    case GET_COUNT_QUEST_ERROR:
      return {
        ...state,
        questsCountError: action.payload,
        questsCountList: [],
        questsCountLoading: false,
      };
    case GET_COUNT_HIDEOUT:
      return {
        ...state,
        hideoutCountLoading: true,
      };
    case GET_COUNT_HIDEOUT_SUCCESS:
      return {
        ...state,
        itemsCountHideout: action.payload,
        hideoutCountError: '',
        hideoutCountLoading: false,
      };
    case GET_COUNT_HIDEOUT_ERROR:
      return {
        ...state,
        hideoutCountError: action.payload,
        itemsCountHideout: [],
        hideoutCountLoading: false,
      };
    default:
      return state;
  }
};
