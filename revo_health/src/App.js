// REACT
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
// -1-
// Private Route
import PrivateRoute from "./components/PrivateRoute";

// -2-
// Login & Authentication
import LoginPage from "./components/Login";

// Standard Components
import UserComponent from "./components/UserComponent/UserComponent";
import Homepage from "./components/Homepage/Homepage";
import AddProcedure from "./components/AddProcedure";

import RegisterUser from "./components/RegisterUser";

// TEST COMPONENTS
import EnhancedTable from "./components/Homepage/newTable";

// IMPORT ACTION CREATORS
// -1-
// getProcedures() --> on componentDidMount()

// CSS
import "./App.css";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class App extends Component {
  componentDidMount() {
    // function to get all procedures on the current DB
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* // Open Routes */}
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterUser} />
          {/* <Route exact path="/addProcedure" component={AddProcedure} /> */}

          {/* <Route exact path="/updateUser" component={UpdateUser} /> */}

          {/* // Protected Routes */}
          <PrivateRoute exact path="/user" component={UserComponent} />
          <PrivateRoute exact path="/addProcedure" component={AddProcedure} />


          {/* // TESTING ROUTES */}
          {/* <Route exact path="/EnhancedTable" component={EnhancedTable} /> */}

          {/* <PrivateRoute exact path="/addProcedure" component={} />
            <PrivateRoute exact path="/editProcedure" component={} />   */}
        </div>
      </Router>
    );
  }
}

export default App;
