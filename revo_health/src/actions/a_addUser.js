// AXIOS 
    import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
    export const ADD_USERS_START = 'ADD_USERS_START'
    export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
    export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE'

// Action Creator
    export const add_user = () => {

    // Send First Action
        return (dispatch) => {
            dispatch({ type: ADD_USERS_START })

        // Start Axios Call
            axios
                .get()
                .then( res => {
                    console.log( res )

                    dispatch({
                        type: ADD_USERS_SUCCESS,
                        payload: res.data
                    })
                })
                .catch( err => {
                    console.log( err )
                    
                    dispatch({
                        type: ADD_USERS_FAILURE,
                        payload: err
                    })
                })
        }
    }