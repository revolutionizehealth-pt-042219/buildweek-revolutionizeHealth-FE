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
  console.log("inside add_procedure action creator = ", newProcedure);

  // Send First Action
  return dispatch => {
    dispatch({ type: ADD_PROCEDURE_START });

    // set authorization for configuration
    const token = localStorage.getItem("token");
    let config = { headers: { authentication: token } };
    // console.log(config);

    // Start Axios Call
    return axios
      .post(
        "https://buildweek-revo-health-be.herokuapp.com/api/procedures",
        newProcedure,
        config
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
