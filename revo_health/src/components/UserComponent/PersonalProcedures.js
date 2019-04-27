// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENTS
import Procedure from "./Procedure";

// MATERIAL UI
import { 
  Card, CardContent, 
  // Typography, 
  Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// import {} from '';

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const PersonalProcedures_Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 67%;
`;

const PersonalProcedures_Title = styled.h2`
  display: flex;
  justify-content: center;

  margin-top: 0px;
`;

const Styled_Card = styled(Card)``;

const Styled_CardContent = styled(CardContent)``;

const LoadMore_Button_Container = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 20px;
`;

class PersonalProcedures extends Component {
  render() {
    return (
      <PersonalProcedures_Container className="PersonalProcedures_Container">
        <Styled_Card>
          <Styled_CardContent>
            <PersonalProcedures_Title>
              Personal Procedures Title
            </PersonalProcedures_Title>

            <Procedure />
            <Procedure />
            <Procedure />

            <LoadMore_Button_Container>
              <Fab color="primary" aria-label="">
                <AddIcon />
              </Fab>
            </LoadMore_Button_Container>
          </Styled_CardContent>
        </Styled_Card>
      </PersonalProcedures_Container>
    );
  }
}

// Map State To Props

// Connect
export default connect(
  null,
  {}
)(PersonalProcedures);
