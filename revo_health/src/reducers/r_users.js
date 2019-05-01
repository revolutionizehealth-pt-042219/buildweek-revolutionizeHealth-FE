// ACTION TYPES
    // Getting Users
    import {
        GET_USER_START,
        GET_USER_SUCCESS,
        GET_USER_FAILURE,
    } from '../actions/a_getUser'

    // // Adding User
    // import {
    //     ADD_USER_START,
    //     ADD_USER_SUCCESS,
    //     ADD_USER_FAILURE,
    // } from '../actions/a_addUser'

    // // Editing User
    // import {
    //     EDIT_USER_START,
    //     EDIT_USER_SUCCESS,
    //     EDIT_USER_FAILURE,
    // } from '../actions/a_editUser'


// Initial State
    const initialState = {
        currentUser: [],
        error: '', 

        is_gettingUsers: false,

        is_addingUser: false,

        is_editingUser: false


    }

// Reducer
    export const users_reducer = (state = initialState, action) => {
        switch(action.type) {

        // Getting Users
            case GET_USER_START: 
                return {
                    ...state,

                    is_gettingUsers: true,
                    error: ''
                }
            
            case GET_USER_SUCCESS:
                return {
                    ...state,

                    currentUser: action.payload,
                    is_gettingUsers: false,
                    error: ''
                }
            
            case GET_USER_FAILURE:
                return {
                    ...state, 

                    is_gettingUsers: false,
                    error:'FAILED to get users'
                }
            
        // // Adding Users
        //     case ADD_USER_START: 
        //         return {
        //             ...state,

        //             is_addingUser: true,
        //             error: ''
        //         }
        
        //     case ADD_USER_SUCCESS:
        //         return {
        //             ...state,

        //             customers: action.payload,
        //             is_addingUser: false,
        //             error: ''
        //         }
            
        //     case ADD_USER_FAILURE:
        //         return {
        //             ...state, 

        //             is_addingUser: false,
        //             error:'FAILED to add users'
        //         }

        // // Editing Users
        //     case EDIT_USER_START: 
        //         return {
        //             ...state,

        //             is_editingUser: true,
        //             error: ''
        //         }
        
        //     case EDIT_USER_SUCCESS:
        //         return {
        //             ...state,

        //             customers: action.payload,
        //             is_editingUser: false,
        //             error: ''
        //         }
            
        //     case EDIT_USER_FAILURE:
        //         return {
        //             ...state, 

        //             is_editingUser: false,
        //             error:'FAILED to edit users'
        //          }
            
        // Default
            default:
                return state
        }
    }

