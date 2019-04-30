// REACT
import React from "react";
import { Route } from "react-router-dom";

// COMPONENTS
// Test Component
// import TESTcomponent from "./components/ActionCreator_TEST";
// import EnhancedTable from "./components/Homepage/TableTest_homepage";

// Login & Authentication
import LoginPage from "./components/Login";
import withAuthenticate from "./authentication/withAuthenticate";

// Standard Components
import UserComponent from "./components/UserComponent/UserComponent";
import Homepage from "./components/Homepage/Homepage";
import RegisterUser from "./components/RegisterUser";


// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <TESTcomponent /> */}

      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/user" component={UserComponent} />
<<<<<<< HEAD
=======
      
      <Route exact path="/register" component={RegisterUser} />


>>>>>>> 393fb3e0bb147d1da282a00a75a569b9f5f7c4ef
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
