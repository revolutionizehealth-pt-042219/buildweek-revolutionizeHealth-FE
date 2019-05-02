// AXIOS
import jwt from "jsonwebtoken";

// ACTION TYPES
// Getting Procedures
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/a_login";

// Initial State
const initialState = {
  is_loggingIn: false,
  token: localStorage.getItem("token"),
  user: jwt.decode(localStorage.getItem("token")),
  error: ""
};

// Reducer
export const login_reducer = (state = initialState, action) => {
  // console.log(action.payload)

  switch (action.type) {
    // Getting Procedures
    case LOGIN_START:
      return {
        ...state,

        is_loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,

        user: action.payload.user,
        token: action.payload.data.token,
        is_loggingIn: false,
        error: ""
      };

    case LOGIN_FAILURE:
      return {
        ...state,

        is_loggingIn: false,
        error: "FAILED to login"
      };

    // Default
    default:
      return state;
  }
};
