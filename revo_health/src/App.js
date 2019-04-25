// REACT
import React from "react";

// COMPONENTS
import TESTcomponent from "./components/ActionCreator_TEST";
import withAuthenticate from "./authentication/withAuthenticate";
import LoginPage from "./components/Login";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hello from App</h2>

      <TESTcomponent />
    </div>
  );
}

export default App;

/* APP BEFORE AUTHENTICATION
  function App() {
    return (
      <div className="App">
        <h2>Hello from App</h2>

        <TESTcomponent />
      </div>
    );
  }

  export default App;
*/

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
