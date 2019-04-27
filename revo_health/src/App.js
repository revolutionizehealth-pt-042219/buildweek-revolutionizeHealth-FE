// REACT
import React from "react";
import { Route } from "react-router-dom";

// COMPONENTS
// Test Component
// import TESTcomponent from "./components/ActionCreator_TEST";

// Login & Authentication
import LoginPage from "./components/Login";
import withAuthenticate from "./authentication/withAuthenticate";

// Standard Components
import Header from "./components/Header";
import UserComponent from "./components/UserComponent/UserComponent";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Homepage";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hello from App</h2>

      {/* <TESTcomponent /> */}

      {/* <Header /> */}
      <Route path="/" component={Header} />

      {/* <UserComponent /> */}
      <Route exact path="/user" component={UserComponent} />

      <Route exact path="/" component={Homepage} />

      {/* <Footer /> */}
      <Route path="/" component={Footer} />
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
