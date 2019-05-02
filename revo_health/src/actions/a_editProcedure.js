// AXIOS
import axios from "axios";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
export const EDIT_PROCEDURE_START = "EDIT_PROCEDURE_START";
export const EDIT_PROCEDURE_SUCCESS = "EDIT_PROCEDURE_SUCCESS";
export const EDIT_PROCEDURE_FAILURE = "EDIT_PROCEDURE_FAILURE";

// Action Creator
export const edit_procedure = () => {
  console.log("inside edit_procedure action creator");

  // Send First Action
  return dispatch => {
    dispatch({ type: EDIT_PROCEDURE_START });
    // Start Axios Call
    axios
      .get()
      .then(res => {
        console.log(res);

        dispatch({
          type: EDIT_PROCEDURE_SUCCESS,
          payload: res.data
        });
      })

      .catch(err => {
        console.log(err);

        dispatch({
          type: EDIT_PROCEDURE_FAILURE,
          payload: err
        });
      });
  };
};
