// REACT
import React from "react";

// COMPONENTS
  // Test Component
    import TESTcomponent from "./components/ActionCreator_TEST";
    
  // Login & Authentication
    import LoginPage from "./components/Login";
    import withAuthenticate from "./authentication/withAuthenticate";

  // Standard Components
    import Header from "./components/Header";
    import UserComponent from "./components/UserComponent/UserComponent";
    import Footer from "./components/Footer";

// CSS
  import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hello from App</h2>

      {/* <TESTcomponent /> */}

      <Header />
      <UserComponent />
      <Footer />
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
