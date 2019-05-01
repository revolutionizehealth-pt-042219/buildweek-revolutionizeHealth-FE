// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// Styled Components
import styled from "styled-components";

// IMPORT ACTION CREATOR
import { login } from "../actions/a_login";

// MATERIAL UI

import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography
} from "@material-ui/core";

// Assets
import logo from "../assets/RevLogo2.svg";

// STYLED COMPONENTS
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right top,
    #264075,
    #526695,
    #7e8fb5,
    #abbad6,
    #dce6f7
  );
  height: 98vh;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: #264075;
  border-radius: 2%;
  margin-bottom: 10px;
`;

const AppLogo = styled.img`
  height: 20vh;
`;

const Styled_Avatar = styled(Avatar)`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    
    console.log("CHECK FOR HISTORY", this.props)

    this.props.login(this.state)
      .then( () => this.props.history.push('/'))

  };

  handleRegister = e => {
    e.preventDefault();
    this.props.history.push("/register");
  };

  render() {
    return (
      <LoginContainer className="loginContainer">
        <StyledPaper className="paperWrapper">
          <LogoWrapper>
            <AppLogo src={logo} alt="" />
          </LogoWrapper>


          <Typography component="h1" variant="h5">
            Welcome to Revo!
          </Typography>

          <form>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>UserName</InputLabel>
              <Input onChange={this.handleInputChange} name="username" />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                onChange={this.handleInputChange}
                name="password"
                type="password"
              />
            </FormControl>

            <StyledButton
              className="signIn_Button"
              onClick={this.handleLoginSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Log in
            </StyledButton>
            <StyledButton
              className="register"
              onClick={this.handleRegister}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register New User
            </StyledButton>
          </form>
        </StyledPaper>
      </LoginContainer>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    is_loggingIn: state.login_reducer.is_loggingIn
  }
}

// Connect
export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
