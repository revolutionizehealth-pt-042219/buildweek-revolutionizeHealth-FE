// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENTS
import Procedure from "./Procedure";

// MATERIAL UI
import {
  Card,
  CardContent,
  // Typography,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// import {} from '';

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const PersonalProceduresContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 67%;
`;

const PersonalProceduresTitle = styled.h2`
  display: flex;
  justify-content: center;

  margin-top: 0px;
`;

const StyledCard = styled(Card)``;

const StyledCardContent = styled(CardContent)``;

const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 20px;
`;

class PersonalProcedures extends Component {
  render() {
    // console.log(this.props);
    // console.log(this.props.procedures);

    return (
      <PersonalProceduresContainer className="PersonalProceduresContainer">
        <StyledCard>
          <StyledCardContent>
            <PersonalProceduresTitle>
              Your Logged Procedures
            </PersonalProceduresTitle>

            {/* Map and return appropraite # of Procedures */}
            {/* {this.props.procedures.map(procedure => {
              return <Procedure procedure={procedure} />;
            })} */}

            {/* <Procedure />
            <Procedure />
            <Procedure /> */}

            <LoadMoreButtonContainer>
              <Fab color="primary" aria-label="">
                <AddIcon />
              </Fab>
            </LoadMoreButtonContainer>
          </StyledCardContent>
        </StyledCard>
      </PersonalProceduresContainer>
    );
  }
}

// Map State To Props

// Connect
export default connect(
  null,
  {}
)(PersonalProcedures);
