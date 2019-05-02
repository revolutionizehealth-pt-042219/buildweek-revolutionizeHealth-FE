// REACT
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// REDUX
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

// Dev Tools
import { compose } from "redux";

// RECUCERS
import { rootReducer } from "./reducers/index";

// COMPONENTS
import App from "./App";

// IMPORT DUMMY DATA
import { patients } from "./dummyData/dummyData";
import { procedures } from "./dummyData/dummyData";

// CSS
// import './index.css';

// -- *** -- *** START CODE -- *** -- *** //
// -- *** -- *** START CODE -- *** -- *** //

// Store Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

// Render App
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
