// AXIOS
import axios from "axios";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
export const GET_PROCEDURES_START = "GET_PROCEDURES_START";
export const GET_PROCEDURES_SUCCESS = "GET_PROCEDURES_SUCCESS";
export const GET_PROCEDURES_FAILURE = "GET_PROCEDURES_FAILURE";

// Action Creator
export const get_procedures = () => {
  console.log("inside get_procedures action creator");

  // Send First Action
  return dispatch => {
    dispatch({ type: GET_PROCEDURES_START });
    // Start Axios Call
    axios
      .get("https://buildweek-revo-health-be.herokuapp.com/api/procedures", {
        headers: { Authentication: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);

        dispatch({
          type: GET_PROCEDURES_SUCCESS,
          payload: res.data
        });
      })

      .catch(err => {
        console.log(err);

        dispatch({
          type: GET_PROCEDURES_FAILURE,
          payload: err
        });
      });
  };
};
