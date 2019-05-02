// Axios
import axios from "axios";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

// Action Creator
export const edit_user = passedItem => {
  console.log(passedItem);

  // Send First Action
  return dispatch => {
    dispatch({ type: EDIT_USER_START });

    // Start Axiox Call
    axios
      .get()
      .then(res => {
        console.log(res);

        dispatch({
          type: EDIT_USER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);

        dispatch({
          type: EDIT_USER_FAILURE,
          payload: err
        });
      });
  };
};
