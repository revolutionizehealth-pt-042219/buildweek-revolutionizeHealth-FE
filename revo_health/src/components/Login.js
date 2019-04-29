// REACT
import React, { Component } from "react";

// Styled Components
import styled from "styled-components";

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

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// Assets
import logo from "../assets/RevLogo.svg";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // When typing in the username/password, it gets saved into state.
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Submitting the form will set a "User" in local storage. within 'withAuthenticate'
  // it checks to see if it's present, and if so, you're considered logged in.
  handleLoginSubmit = e => {
    e.preventDefault();
    const user = this.state.username;
    localStorage.setItem("user", user);
    // window.location.reload();
  };

  render() {
    return (
      <LoginContainer className="loginContainer">
        <StyledPaper className="paperWrapper">
          <LogoWrapper>
            <AppLogo src={logo} alt="" />
          </LogoWrapper>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Log in
          </Typography>

          <form>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>UserName</InputLabel>
              <Input name="username" />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Password</InputLabel>
              <Input name="password" type="password" />
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
          </form>
        </StyledPaper>
      </LoginContainer>
    );
  }
}

export default Login;
