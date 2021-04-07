import {
  SET_TOKEN,
  SET_USER_INFO,
  SET_USER_MOBILEMENUTREE,
} from '../constants';

const INITIAL_STATE = {
  token: '',
  userInfo: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo,
      };
    case SET_USER_MOBILEMENUTREE:
      return {
        ...state,
        userMobileMenuTree: action.payload.userMobileMenuTree,
      };
    default:
      return state;
  }
}
