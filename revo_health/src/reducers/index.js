// REDUX
import { combineReducers } from "redux";

// REDUCERS
import { users_reducer } from "./r_users";
import { procedures_reducer } from "./r_procedures";

import { login_reducer } from "./r_login";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

export const rootReducer = combineReducers({
  login_reducer,

  users_reducer,
  procedures_reducer
});
