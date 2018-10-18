import { combineReducers } from 'redux';

const currencies = (
  state = {
    date: '',
    valute: [],
  },
  action
) => {
  return state;
};

export default combineReducers({
  currencies,
});
