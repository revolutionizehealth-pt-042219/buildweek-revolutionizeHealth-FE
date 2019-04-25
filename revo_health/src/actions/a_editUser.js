// Axios
    import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
    export const EDIT_USERS_START = 'EDIT_USERS_START'
    export const EDIT_USERS_SUCCESS = 'EDIT_USERS_SUCCESS'
    export const EDIT_USERS_FAILURE = 'EDIT_USERS_FAILURE'

// Action Creator
    export const edit_user = passedItem => {
        console.log(passedItem)

        // Send First Action
            return (dispatch) => {
                dispatch({ type: EDIT_USERS_START })
            
        
        // Start Axiox Call
            axios
                .get()
                .then( res => {
                    console.log( res )

                    dispatch({
                        type: EDIT_USERS_SUCCESS,
                        payload: res.data
                    })
                })
                .catch( err => {
                    console.log( err )
                    
                    dispatch({
                        type: EDIT_USERS_FAILURE,
                        payload: err
                    })
                })
    }
}