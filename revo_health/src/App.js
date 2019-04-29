// REACT
import React from "react";
import { Route } from "react-router-dom";

// COMPONENTS
// Test Component
// import TESTcomponent from "./components/ActionCreator_TEST";
import EnhancedTable from "./components/Homepage/TableTest_homepage";

// Login & Authentication
import LoginPage from "./components/Login";
import withAuthenticate from "./authentication/withAuthenticate";

// Standard Components
import UserComponent from "./components/UserComponent/UserComponent";
import Homepage from "./components/Homepage/Homepage";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <TESTcomponent /> */}

      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/user" component={UserComponent} />

      {/* <Route extat path="/testTable" component={EnhancedTable} /> */}
    </div>
  );
}

export default App;

/*APP AFTER AUTHENTICATION
  function App() {
    return (
      <div className="App">
        <h2>Hello from App</h2>

        <ComponentWithAuthenticate />
      </div>
    );
  }

  const ComponentWithAuthenticate = withAuthenticate(TESTcomponent)(LoginPage);

  export default App;
*/
