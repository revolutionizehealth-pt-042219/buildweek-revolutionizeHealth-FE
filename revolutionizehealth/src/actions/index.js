import axios from "axios";

/* 
  Creating Action Types to be imported into the Reducer file
*/
export const GET_USERS_FTCHING = "GET_USERS_SUCCESS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

/*
  C - addUser
  R - getUsers
  U - updateUser
  D - deleteUser
*/

// Once we have an endpoint from the backend, we can update the code below with the proper endpoint

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_FTCHING });
  axios
    .get("http://localhost:3333/")
    .then(response => {
      console.log("got it");
      dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: GET_USERS_FAILURE, payload: error }));
};
