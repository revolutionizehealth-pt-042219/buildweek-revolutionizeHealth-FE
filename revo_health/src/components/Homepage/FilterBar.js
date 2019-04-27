// REACT
import 
  React, { 
  // Component 
} from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENTS

// MATERIAL UI
import { 
  // Card, CardContent, 
  // Typography, 
  Fab 
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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

const FilterBar = () => {
  return (
    <StyledSearchBarContainer>
      <Fab color="primary" aria-label="">
        <AddIcon />
      </Fab>
      <StyledInput type="text" placeholder="Search" className="search-bar" />
    </StyledSearchBarContainer>
  );
};

export default connect(
  null,
  {}
)(FilterBar);
