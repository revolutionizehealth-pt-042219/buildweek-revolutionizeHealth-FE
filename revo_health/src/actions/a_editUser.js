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
  console.log("item passed to EDIT USER ACTION CREATOR: ", passedItem);
  console.log("passedItem.id -> for specific path: ", passedItem.id);

  // Send First Action
  return dispatch => {
    dispatch({ type: EDIT_USER_START });

    // set authorixation for configuration
    const token = localStorage.getItem("token");
    let config = { headers: { authentication: token } };
    console.log(config);

    // Start Axiox Call
    axios
      .put(
        `https://buildweek-revo-health-be.herokuapp.com/api/users/${
          passedItem.id
        }`,
        passedItem,
        config
      )
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
