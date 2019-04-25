import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
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
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div className="container-login-form">
        <form className="login-form">
          <div className="login-text">
            Log in to see all of your own procedures.
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
        </form>
      </div>
    );
  }
}

export default Login;
