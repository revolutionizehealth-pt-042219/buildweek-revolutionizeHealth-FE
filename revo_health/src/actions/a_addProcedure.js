// AXIOS
import axios from "axios";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
export const ADD_PROCEDURE_START = "ADD_PROCEDURE_START";
export const ADD_PROCEDURE_SUCCESS = "ADD_PROCEDURE_SUCCESS";
export const ADD_PROCEDURE_FAILURE = "ADD_PROCEDURE_FAILURE";

// Action Creator
export const add_procedure = newProcedure => {
  console.log("inside add_procedure action creator = " + newProcedure);

  // Send First Action
  return dispatch => {
    dispatch({ type: ADD_PROCEDURE_START });
    // Start Axios Call
    axios
      .get(
        "https://buildweek-revo-health-be.herokuapp.com/api/procedures",
        newProcedure
      )
      .then(res => {
        console.log(res);

        dispatch({
          type: ADD_PROCEDURE_SUCCESS,
          payload: res.data
        });
      })

      .catch(err => {
        console.log(err);

        dispatch({
          type: ADD_PROCEDURE_FAILURE,
          payload: err
        });
      });
  };
};
