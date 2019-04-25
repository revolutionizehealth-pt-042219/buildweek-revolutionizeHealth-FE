// REACT
  import React from 'react';

// COMPONENTS
  import TESTcomponent from './components/ActionCreator_TEST'
  import Header from './components/Header'
  import UserComponent from './components/UserComponent'
  import Footer from './components/Footer'


// CSS
  import './App.css';

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
