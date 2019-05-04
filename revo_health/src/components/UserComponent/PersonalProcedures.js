// REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";

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

  padding: 10px 0px;
`;

class PersonalProcedures extends Component {
  render() {
    // console.log(this.props);
    // console.log(this.props.procedures);

    console.log(this.props)

    return (
      <PersonalProceduresContainer className="PersonalProceduresContainer">
        <StyledCard>
          <StyledCardContent>
            <PersonalProceduresTitle>
              Your Logged Procedures
            </PersonalProceduresTitle>

            <LoadMoreButtonContainer>
              <Fab 
                color="primary" 
                aria-label=""
                component={Link} to="/addProcedure"
              >
                <AddIcon />
              </Fab>
            </LoadMoreButtonContainer>

            {this.props.procedures.map(procedure => {
              console.log(procedure.user_id)
              console.log(this.props.userID)

              if (procedure.user_id === this.props.userID) {
                return <Procedure procedure={procedure} />;
              }

            })}

            
          </StyledCardContent>
        </StyledCard>
      </PersonalProceduresContainer>
    );
  }
}


// Map State To Props
const mapStateToProps = state => {
  return {
    procedures: state.procedures_reducer.procedures,
    userID: state.users_reducer.currentUser.id
  };
};

// Connect
export default connect(
  mapStateToProps,
  {}
)(PersonalProcedures);
