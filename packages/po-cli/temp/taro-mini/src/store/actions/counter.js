import { ADD, MINUS, ADD_PERSIST, MINUS_PERSIST } from '../constants';

export const add = () => {
  return {
    type: ADD,
  };
};
export const minus = () => {
  return {
    type: MINUS,
  };
};

export const addPersist = () => {
  return {
    type: ADD_PERSIST,
  };
};
export const minusPersist = () => {
  return {
    type: MINUS_PERSIST,
  };
};

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}

// 异步的action
export function asyncAddPersist() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addPersist());
    }, 2000);
  };
}
