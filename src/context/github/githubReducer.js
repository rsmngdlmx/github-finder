import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        alert: null
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
        alert: null
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        alert: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    default:
      return state;
  }
};
