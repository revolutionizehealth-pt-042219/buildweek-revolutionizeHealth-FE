// AXIOS
import axios from "axios";
import jwt from "jsonwebtoken";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Action Creator --> LOGIN
export const login = loginInfo => {
  console.log("inside get_users action creator");
  console.log(loginInfo);

  // Send First Action
  return dispatch => {
    dispatch({ type: LOGIN_START });

    // Start Axios Call
    // RETURN axios call --> created Promise --> allowed to .then() off of action creator --> push user to homepage
    return axios

      .post(
        "https://buildweek-revo-health-be.herokuapp.com/api/users/login",
        loginInfo
      )
      .then(res => {
        // set returned token to variable
        const token = res.data.token;

        // add token to localStorage
        localStorage.setItem("token", token);

        const decodedToken = jwt.decode(token);
        console.log(decodedToken);

        // dispatch success action to reducer
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data: res.data,
            user: decodedToken
          }
        });
      })

      .catch(err => {
        console.log(err);

        dispatch({
          type: LOGIN_FAILURE,
          payload: err
        });
      });
  };
};
