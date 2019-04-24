// ACTION TYPES
    // Getting Users
    import {
        GET_USERS_START,
        GET_USERS_SUCCESS,
        GET_USERS_FAILURE,
    } from '../actions/a_getUsers'

    // Adding User
    import {
        ADD_USERS_START,
        ADD_USERS_SUCCESS,
        ADD_USERS_FAILURE,
    } from '../actions/a_addUser'

    // Editing User
    import {
        EDIT_USERS_START,
        EDIT_USERS_SUCCESS,
        EDIT_USERS_FAILURE,
    } from '../actions/a_editUser'


// Initial State
    const initialState = {
        customers: [],
        error: '', 

        is_gettingUsers: false,

        is_addingUser: false,

        is_editingUser: false


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

                    customers: action.payload,
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

                    is_addingUser: true,
                    error: ''
                }
        
            case ADD_USERS_SUCCESS:
                return {
                    ...state,

                    customers: action.payload,
                    is_addingUser: false,
                    error: ''
                }
            
            case ADD_USERS_FAILURE:
                return {
                    ...state, 

                    is_addingUser: false,
                    error:'FAILED to get users'
                }

        // Editing Users
            case EDIT_USERS_START: 
                return {
                    ...state,

                    is_editingUser: true,
                    error: ''
                }
        
            case EDIT_USERS_SUCCESS:
                return {
                    ...state,

                    customers: action.payload,
                    is_editingUser: false,
                    error: ''
                }
            
            case EDIT_USERS_FAILURE:
                return {
                    ...state, 

                    is_editingUser: false,
                    error:'FAILED to get users'
                }
            
        // Default
            default:
                return state
        }
    }

