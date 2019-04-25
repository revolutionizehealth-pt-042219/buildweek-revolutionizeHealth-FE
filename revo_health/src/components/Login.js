// REACT
import React, { Component } from "react";

// Styled Components
import styled from "styled-components";

// STYLED COMPONENTS
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #7eb2dd;
  margin: auto 0;
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  padding: 10px 0px;
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
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <LoginContainer>
        <LoginForm>
          <div className="login-text">
            Log in to see all of your own procedures!
          </div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleLoginSubmit} className="login-button">
            Log In
          </button>
        </LoginForm>
      </LoginContainer>
    );
  }
}

export default Login;
