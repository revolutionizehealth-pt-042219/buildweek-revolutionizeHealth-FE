/*
  importing all of the action types from `../actions`
*/

import {
  GET_USERS_FTCHING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "../actions";

const initialState = {
  users: [],
  fetchingUser: false,
  addingUser: false,
  updatingUser: false,
  deletingUser: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FTCHING:
      return {
        // something here
      };
    case GET_USERS_SUCCESS:
      return {
        ...state
        // something here
      };
    case GET_USERS_FAILURE:
      return {
        ...state
        // something here
      };

    default:
      return state;
  }
};

export default rootReducer;
