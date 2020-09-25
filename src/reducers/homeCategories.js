import { MENU_STATUS } from '../actions';

const initialState = {
  open: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MENU_STATUS:
      return {
        ...state,
        open: state.open,
      };
    default:
      return state;
  }
};
