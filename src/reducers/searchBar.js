import { SEARCHBAR } from '../actions';

const initialState = {
  sbValue: 'test',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCHBAR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
