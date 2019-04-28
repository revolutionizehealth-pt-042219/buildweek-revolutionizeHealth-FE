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

const StyledCard = styled(Card)``;

const ProceduresTitle = styled.h2`
  display: flex;
  justify-content: center;

  margin-top: 0px;
`;

const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 20px;
`;

class ProcedureList extends Component {
  render() {
    console.log(this.props);

    return (
      <ProcedureListContainer>
        <StyledCard>
          <ProceduresTitle>Procedures Title</ProceduresTitle>

          {this.props.dummyProcedures.map(procedure => {
            return <Procedure procedure={procedure} />;
          })}

          {/* <Procedure />
          <Procedure />
          <Procedure />
          <Procedure />
          <Procedure /> */}

          <LoadMoreButtonContainer>
            <Fab color="primary" aria-label="">
              <AddIcon />
            </Fab>
          </LoadMoreButtonContainer>
        </StyledCard>
      </ProcedureListContainer>
    );
  }
}

// Map State To Props
const mapStateToProps = state => {
  return {
    dummyPatients: state.dummyPatients,
    dummyProcedures: state.dummyProcedures
  };
};

// Connect
export default connect(
  mapStateToProps,
  {}
)(ProcedureList);
