// AXIOS
import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
    export const LOGIN_START = 'LOGIN_START'
    export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
    export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// Action Creator
    export const login = (loginInfo) => {
        console.log('inside get_users action creator')
        console.log(loginInfo)

    // Send First Action
        return (dispatch) => {
            dispatch({ type: LOGIN_START })
        
        // Start Axios Call
            axios
                .post('https://buildweek-revo-health-be.herokuapp.com/api/users/login', loginInfo)
                .then( res => {
                    console.log( res )

                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res.data
                    })
                })

                .catch( err => {
                    console.log( err )
                    
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: err
                    })
                })
    }
}