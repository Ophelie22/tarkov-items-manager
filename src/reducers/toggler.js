import { OPEN_MENU } from '../actions';

const initialState = {
  open: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
