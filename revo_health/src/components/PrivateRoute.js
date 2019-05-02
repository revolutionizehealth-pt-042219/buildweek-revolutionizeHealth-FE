// REACT
import React from "react";
import { Route, Redirect, withRouter } from "react-router";

// REDUX
import { connect } from "react-redux";

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

// Map State To Props
const mapStateToProps = state => {
  return {
    token: state.login_reducer.token
  };
};

// Connect
export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);
