// Reducer for Hideout page

import {
  GET_HIDEOUTS,
  GET_HIDEOUTS_SUCCESS,
  GET_HIDEOUTS_ERROR,
  TOGGLE_HIDEOUT,
} from '../actions';

const initialState = {

  hideoutsList: [],
  hideoutsLoading: false,
  hideoutsError: '',
  hideoutElementState: 'Air Filtering Unit',

};

const allHideouts = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_HIDEOUTS:
      return {
        ...state,
        hideoutsLoading: true,
      };
    case GET_HIDEOUTS_SUCCESS:
      return {
        ...state,
        hideoutsList: [...action.payload],
        hideoutsError: '',
        hideoutsLoading: false,
      };
    case GET_HIDEOUTS_ERROR:
      return {
        ...state,
        hideoutsError: action.payload,
        hideoutsList: [],
        hideoutsLoading: false,
      };
    case TOGGLE_HIDEOUT:
      return {
        ...state,
        hideoutElementState: action.payload,
      };
    default:
      return state;
  }
};

export default allHideouts;
