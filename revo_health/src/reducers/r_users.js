// ACTION TYPES
    // Getting Users
    import {
        GET_USERS_START,
        GET_USERS_SUCCESS,
        GET_USERS_FAILURE,
    } from '../actions/a_getUsers'

    import {
        ADD_USERS_START,
        ADD_USERS_SUCCESS,
        ADD_USERS_FAILURE,
    } from '../actions/a_addUser'

    // .. OTHER customer actions

// Initial State
    const initialState = {
        customers: [],
        error: '', 

        is_gettingUsers: false

        // OTHER customer action initial states

    }

// Reducer
    export const users_reducer = (state = initialState, action) => {
        switch(action.type) {

        // Getting Users
            case GET_USERS_START: 
                return {
                    ...state,

                    is_gettingUsers: true,
                    error: ''
                }
            
            case GET_USERS_SUCCESS:
                return {
                    ...state,

                    is_gettingUsers: false,
                    error: ''
                }
            
            case GET_USERS_FAILURE:
                return {
                    ...state, 

                    is_gettingUsers: false,
                    error:'FAILED to get users'
                }
            
        // Adding Users
            case ADD_USERS_START: 
                return {
                    ...state,

                    is_gettingUsers: true,
                    error: ''
                }
        
            case ADD_USERS_SUCCESS:
                return {
                    ...state,

                    is_gettingUsers: false,
                    error: ''
                }
            
            case ADD_USERS_FAILURE:
                return {
                    ...state, 

                    is_gettingUsers: false,
                    error:'FAILED to get users'
                }
            
        // Default
            default:
                return state
        }
    }

