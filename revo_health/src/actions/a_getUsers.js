// AXIOS
    import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
    export const GET_USERS_START = 'GET_USERS_START'
    export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
    export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

// Action Creator
    export const get_users = () => {
        console.log('inside get_users action creator')

    // Send First Action
        return (dispatch) => {
            dispatch({ type: GET_USERS_START })
        
        // Start Axios Call
            axios
                .get()
                .then( res => {
                    console.log( res )

                    dispatch({
                        type: GET_USERS_SUCCESS,
                        payload: res.data
                    })
                })

                .catch( err => {
                    console.log( err )
                    
                    dispatch({
                        type: GET_USERS_FAILURE,
                        payload: err
                    })
                })
    }
}