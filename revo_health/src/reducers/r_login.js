// ACTION TYPES
    // Getting Procedures
    import {
        LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_FAILURE,
    } from '../actions/a_login'

// Initial State 
const initialState = {
    is_loggingIn: false,
    error: '',
}

// Reducer 
export const procedures_reducer = (state = initialState, action) => {
    switch(action.type) {

    // Getting Procedures
        case LOGIN_START:
            return {
                ...state,
                
                is_loggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,

                procedures: action.payload,
                is_loggingIn: false,
                error: ''
            }
        
        case LOGIN_FAILURE:
            return {
                ...state,

                is_loggingIn: false,
                error: 'FAILED to login'
            }

    // Default
        default:
            return state
    }
}