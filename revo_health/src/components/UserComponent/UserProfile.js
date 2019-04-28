// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// MATERIAL UI
import {
  Card,
  CardContent,
  // Typography,
  Avatar
} from "@material-ui/core";

// import {} from '';

// IMPORT ACTION CREATORS

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const StyledCard = styled(Card)`
  display: flex;

  width: 33%;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class UserProfile extends Component {
  render() {
    console.log(this.props);

    //WHAT USER??
    const UserIndex = 2;

    return (
      <StyledCard className="userProfile">
        <StyledCardContent>
          <Avatar alt="User#" src="" className="avatarIMG" />
          <ProfileInfo>
            <h2>
              {this.props.people[UserIndex].first_name +
                " " +
                this.props.people[UserIndex].last_name}
            </h2>
            <h3>{"email:" + " " + this.props.people[UserIndex].email}</h3>
            <h4>
              {this.props.people[UserIndex].has_insurance ? (
                "Current Insurance:" +
                " " +
                this.props.people[UserIndex].insurance_name
              ) : (
                <button>Please Add Your Current Insurance</button>
              )}
            </h4>
          </ProfileInfo>
        </StyledCardContent>
      </StyledCard>
    );
  }
}

// Map State To Props

// Connect
export default connect(
  null,
  {}
)(UserProfile);
