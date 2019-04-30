import React from "react";
import { Route } from "react-router-dom";

// Standard Components
import UserComponent from "./UserComponent/UserComponent";
import Homepage from "./Homepage/Homepage";
import RegisterUser from "./RegisterUser";
import LoginPage from "./Login";

function AppLoggedIn() {
  return (
    <div className="AppLoggedIn">
      <h1>Hello from AppLoggedIn</h1>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/user" component={UserComponent} />

      <Route exact path="/register" component={RegisterUser} />
    </div>
  );
}
export default AppLoggedIn;
