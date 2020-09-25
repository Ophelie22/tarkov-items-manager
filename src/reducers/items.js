import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  SEARCH_ITEM,
} from '../actions';

const initialState = {

  list: [],
  loading: false,
  error: '',
  search: '',
  searchResults: [],

};

const items = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: '',
        loading: false,
      };
    case GET_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        list: [],
        loading: false,
      };
    case SEARCH_ITEM:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default items;
