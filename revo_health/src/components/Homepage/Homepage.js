// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENT
import FilterBar from "./FilterBar";

// Styled Compoennts
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <h1>hi from Homepage Component</h1>
        <FilterBar />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Homepage);
