// Reducer for Quests page

import {
  GET_DEALERS,
  GET_DEALERS_ERROR,
  GET_DEALERS_SUCCESS,
  TOGGLE_DEALER,
} from '../actions';

const initialState = {
  dealersList: [],
  dealersLoading: false,
  dealersError: '',
  dealer: 'Prapor',
};

const allQuests = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_DEALERS:
      return {
        ...state,
        dealersLoading: true,
      };
    case GET_DEALERS_SUCCESS:
      return {
        ...state,
        dealersList: [...action.payload],
        dealersError: '',
        dealersLoading: false,
      };
    case GET_DEALERS_ERROR:
      return {
        ...state,
        dealersError: action.payload,
        dealersList: [],
        dealersLoading: false,
      };
    case TOGGLE_DEALER:
      return {
        ...state,
        dealer: action.payload,
      };
    default:
      return state;
  }
};

export default allQuests;
