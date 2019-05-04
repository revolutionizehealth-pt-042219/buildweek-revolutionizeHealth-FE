// REACT
import React, { Component } from "react";

// HISTORY
// import createBrowserHistory from "../../utils/history";

// REDUX
import { connect } from "react-redux";

// Colors
import colors from "../../styles/colorVariables";

// MATERIAL UI
import { Card, CardContent, Button } from "@material-ui/core";

import { FormControl, InputLabel, Input } from "@material-ui/core";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import compose from "recompose/compose";
import { withStyles } from "@material-ui/styles";

// IMPORT ACTION CREATORS
// -1-
// Get User Info
import { get_user } from "../../actions/a_getUser";
import { edit_user } from '../../actions/a_editUser'

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

// Material UI Styling
const styles = theme => ({
  userProfile_Card: {
    backgroundColor: colors.userProfileCard_background
  }
});

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser_view: false,
      udpateUserObj: {
        id: this.props.currentUser.id,
        type: undefined,
        first_name: undefined,
        last_name: undefined,

        username: undefined,
        email: undefined,

        has_insurance: undefined,
        insurance_name: undefined
      }
    };
  }

  componentDidMount() {

    // Get Current User Information
      const currentUserID = this.props.userID;
      console.log("UserProfileID = " + currentUserID);
      this.props.get_user(currentUserID);
    
    // Filter for current user ID
  }

  openEdit_view = e => {
    e.preventDefault();
    console.log("edit user clicked");

    this.setState(prevState => ({
      ...prevState,
      editUser_view: !prevState.editUser_view
    }));
  };

  handleInputChange = e => {
    // this.setState({ [e.target.name]: e.target.value });

    this.setState( { udpateUserObj: {...this.state.udpateUserObj, [e.target.name]: e.target.value }})
  };

  submit_userProfileEdits = e => {
    e.preventDefault();
    this.openEdit_view(e);

    // CALL EDIT ACTION CREATOR
    // make sure to MATCH SHAPE before sending OBJECT to ACTION CREATOR
    this.props.edit_user(this.state.udpateUserObj)



  };

  render() {
    const { classes } = this.props;
    console.log('USER PROFILE PROPS',this.props)

    return (
      <StyledCard
        // className="userProfile"
        className={classes.userProfile_Card}
      >
        <StyledCardContent>
          <ProfileInfo>
            {this.state.editUser_view && (
              <form>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>Patient Type</InputLabel>
                  <Select
                    value={this.state.type}
                    onChange={this.handleInputChange}
                    inputProps={{
                      name: "type"
                    }}
                  >
                    <MenuItem value={"Patient"}>Patient</MenuItem>
                    <MenuItem value={"Doctor"}>Doctor</MenuItem>
                  </Select>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel>First Name</InputLabel>
                  <Input
                    name="first_name"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel>Last Name</InputLabel>
                  <Input
                    name="last_name"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel>User Name</InputLabel>
                  <Input
                    name="username"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel>Email</InputLabel>
                  <Input
                    name="email"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel>Have Insurance?</InputLabel>
                  <Select
                    value={this.state.has_insurance}
                    onChange={this.handleInputChange}
                    inputProps={{
                      name: "has_insurance"
                    }}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel>Insurance Name</InputLabel>
                  <Input
                    name="insurance_name"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </FormControl>
                <Button
                  onClick={this.submit_userProfileEdits}
                  variant="outlined"
                >
                  Submit Profile Edits
                </Button>
              </form>
            )}

            {!this.state.editUser_view && (
              <div>
                <h3>{this.props.currentUser.type}</h3>
                <h3>
                  {this.props.currentUser.first_name +
                    " " +
                    this.props.currentUser.last_name}
                </h3>
                <h3>{this.props.currentUser.username}</h3>
                <h3>{this.props.currentUser.email}</h3>
                {this.props.currentUser.has_insurance && (
                  <h3> {this.props.currentUser.insurance_name} </h3>
                )}
                <Button onClick={this.openEdit_view} variant="outlined">
                  {" "}
                  Edit Profile{" "}
                </Button>
              </div>
            )}
          </ProfileInfo>
        </StyledCardContent>
      </StyledCard>
    );
  }
}

// Map State To Props
const mapStateToProps = state => {
  return {
    userID: state.login_reducer.user.id,
    currentUser: state.users_reducer.currentUser,
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      get_user,
      edit_user
    }
  )
)(UserProfile);
