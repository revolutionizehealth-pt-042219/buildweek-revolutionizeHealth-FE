// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENT
import FilterBar from "./FilterBar";
import ProcedureList from "./ProcedureList";
import Map from "./Map";

// Styled Compoennts
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const StyledHomepageBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <h1>Hello from Homepage Component</h1>
        <FilterBar />
        <StyledHomepageBody>
          <ProcedureList />
          <Map />
        </StyledHomepageBody>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Homepage);
