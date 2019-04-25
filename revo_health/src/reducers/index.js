// REDUX 
    import { combineReducers } from 'redux'

// REDUCERS
    import { users_reducer } from './r_users'
    import { procedures_reducer } from './r_procedures'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

export const rootReducer = combineReducers({
    users_reducer,
    procedures_reducer
})