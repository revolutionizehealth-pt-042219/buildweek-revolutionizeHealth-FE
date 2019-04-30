// AXIOS 
    import axios from 'axios'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Create Action Types
    export const ADD_USERS_START = 'ADD_USERS_START'
    export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
    export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE'

// Action Creator
    export const add_user = newUser => {
        console.log(newUser)
            // newUser NEEDS TO INCLUDE 
                //  1) Name
                //  2) Email
                //  3) Insurance { ins_bool & ins_name }

    // Send First Action
        return (dispatch) => {
            dispatch({ type: ADD_USERS_START })

        // Start Axios Call
            axios
                .get('https://buildweek-revo-health-be.herokuapp.com/api/users/register')
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