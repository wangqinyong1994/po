import { viewUserInfo, viewUserMobileMenuTree } from '@/api';
import {
  SET_TOKEN,
  SET_USER_INFO,
  SET_USER_MOBILEMENUTREE,
} from '../constants';

export const setToken = token => {
  return {
    type: SET_TOKEN,
    payload: {
      token,
    },
  };
};

export const setUserInfo = userInfo => {
  return {
    type: SET_USER_INFO,
    payload: {
      userInfo,
    },
  };
};

export const setUserMobileMenuTree = userMobileMenuTree => {
  return {
    type: SET_USER_MOBILEMENUTREE,
    payload: {
      userMobileMenuTree,
    },
  };
};

// 异步的action
export function asyncSetToken(token) {
  return dispatch => {
    dispatch(setToken(token));
    viewUserInfo().then(res => {
      dispatch(setUserInfo(res));
    });
    viewUserMobileMenuTree({ ename: 'mobile-gridApp' }).then(res => {
      dispatch(setUserMobileMenuTree(res));
    });
  };
}
