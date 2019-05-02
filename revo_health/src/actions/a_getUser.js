// AXIOS
import axios from "axios";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

// Action Creator
export const get_user = userID => {
  console.log("inside adskfhl get_user action creator");
  console.log(userID);

  // Send First Action
  return dispatch => {
    dispatch({ type: GET_USER_START });

    // - V2 -
    // set authorization configuration
    const token = localStorage.getItem("token");
    console.log("TOKEN IN ACTION CREATOR", token);
    let config = { headers: { authorization: token } };
    console.log("HEADERS IN ACTION CREATOR", config);

    // Start Axios Call
    axios
      .get(
        `https://buildweek-revo-health-be.herokuapp.com/api/users/${userID}`,
        config
      )
      .then(res => {
        console.log(res);

        dispatch({
          type: GET_USER_SUCCESS,
          payload: res.data
        });
      })

      .catch(err => {
        console.log(err);

        dispatch({
          type: GET_USER_FAILURE,
          payload: err
        });
      });

    // - V1 -
    // Start Axios Call
    // axios
    //     .get(`https://buildweek-revo-health-be.herokuapp.com/api/users/${userID}`, {
    //         headers: { Authentication: localStorage.getItem('token')}
    //     })
    //     .then( res => {
    //         console.log( res )

    //         dispatch({
    //             type: GET_USER_SUCCESS,
    //             payload: res.data
    //         })
    //     })

    //     .catch( err => {
    //         console.log( err )

    //         dispatch({
    //             type: GET_USER_FAILURE,
    //             payload: err
    //         })
    //     })
  };
};
