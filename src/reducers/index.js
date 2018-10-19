import { combineReducers } from 'redux';

import { DATA_RECEIVE, DATA_REQUEST, ERROR } from '../actions';

const currencies = (
  state = {
    date: '',
    valute: [],
  },
  action
) => {
  switch (action.type) {
    case DATA_RECEIVE:
      return {
        date: action.date,
        valute: action.valute,
      };
    default:
      return state;
  }
};

const loading = (
  state = {
    isloading: false,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        isloading: true,
        error: '',
      };
    case DATA_RECEIVE:
      return {
        isloading: false,
        error: '',
      };
    case ERROR:
      return {
        isloading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default combineReducers({
  currencies,
  loading,
});
