// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENTS
import Procedure from "../UserComponent/Procedure";

// MATERIAL UI
import { 
  Card, 
  // CardContent, 
  // Typography, 
  Fab 
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// import {} from '';

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const ProcedureListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 67%;
`;

const Styled_Card = styled(Card)``;

const ProceduresTitle = styled.h2`
  display: flex;
  justify-content: center;

  margin-top: 0px;
`;

const LoadMore_Button_Container = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 20px;
`;

class ProcedureList extends Component {
  render() {
    return (
      <ProcedureListContainer>
        <Styled_Card>
          <ProceduresTitle>Procedures Title</ProceduresTitle>

          <Procedure />
          <Procedure />
          <Procedure />
          <Procedure />
          <Procedure />

          <LoadMore_Button_Container>
            <Fab color="primary" aria-label="">
              <AddIcon />
            </Fab>
          </LoadMore_Button_Container>
        </Styled_Card>
      </ProcedureListContainer>
    );
  }
}

// Map State To Props

// Connect
export default connect(
  null,
  {}
)(ProcedureList);
