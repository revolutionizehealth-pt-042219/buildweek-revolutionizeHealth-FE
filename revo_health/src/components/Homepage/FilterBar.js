// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENTS

// MATERIAL UI

// import {} from '';

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const StyledSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StyledInput = styled.input`
  background-color: #f5f8fa;
  width: 80%;
`;

const StyledAddButton = styled.div`
  margin: 0px 20px;
  padding: 10px;
  background: #00dd00;
  border-radius: 50%;
`;

const FilterBar = () => {
  return (
    <StyledSearchBarContainer>
      <StyledAddButton>+</StyledAddButton>
      <StyledInput type="text" placeholder="Search" className="search-bar" />
    </StyledSearchBarContainer>
  );
};

export default connect(
  null,
  {}
)(FilterBar);
