import { ADD_PERSIST, MINUS_PERSIST } from '../constants';

const INITIAL_STATE = {
  num: 0,
};

export default function counterPersist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PERSIST:
      return {
        ...state,
        num: state.num + 1,
      };
    case MINUS_PERSIST:
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return state;
  }
}
