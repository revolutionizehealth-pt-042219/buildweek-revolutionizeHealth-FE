// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENT
// import UserProfile from "./UserProfile";
// import PersonalProcedures from "./PersonalProcedures";

// Styled Compoennts
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class Homepage extends Component {
  render() {
    return <h1>hi from Homepage Component</h1>;
  }
}

export default connect(
  null,
  {}
)(Homepage);
