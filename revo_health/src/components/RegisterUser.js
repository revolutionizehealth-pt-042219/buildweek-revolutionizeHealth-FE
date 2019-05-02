// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// Styled Components
import styled from "styled-components";

// IMPORT ACTION CREATOR
import { add_user } from "../actions/a_addUser";

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

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// Assets
import logo from "../assets/RevLogo2.svg";

// STYLED COMPONENTS
const RegisterContainer = styled.div`
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

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  padding: 20px;
  width: 50%;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: undefined,
      first_name: undefined,
      last_name: undefined,

      username: undefined,
      password: undefined,
      email: undefined,

      has_insurance: undefined,
      insurance_name: undefined
    };
  }

  // When typing in the username/password, it gets saved into state.
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault();

    this.props
      .add_user(this.state)
      .then(() => this.props.history.push("/login"));
  };

  render() {
    return (
      <RegisterContainer className="registerContainer">
        <StyledPaper>
          <LogoWrapper>
            <AppLogo src={logo} alt="" />
          </LogoWrapper>

          <Typography component="h1" variant="h5">
            Welcome To The Community!
          </Typography>

          <form onSubmit={this.handleRegister} className="form">
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
              <InputLabel>Password</InputLabel>
              <Input
                name="password"
                type="password"
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

            <StyledButton
              className="register"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register User
            </StyledButton>
          </form>
        </StyledPaper>
      </RegisterContainer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

// Connect
export default connect(
  mapStateToProps,
  { add_user }
)(RegisterUser);

// // REACT
//     import React, { Component } from "react";

// // REDUX
//     import { connect } from 'react-redux'

// // ACTION CREATORS
//     import { add_user } from '../actions/a_addUser'

// // Styled Components
//     import styled from "styled-components";

// // MATERIAL UI

// // import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// // Assets
// // import logo from "../assets/RevLogo.svg";

// // STYLED COMPONENTS

// // -- *** START CODE *** -- //
// // -- *** START CODE *** -- //

// class RegisterUser extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             type: undefined,
//             first_name: undefined,
//             last_name: undefined,

//             username: undefined,
//             password: undefined,
//             email: undefined,

//             has_insurance: undefined,
//             insurance_name: undefined
//         };
//     }

// // When typing in the username/password, it gets saved into state.
//     handleInputChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

// // Submitting the form will set a "User" in local storage. within 'withAuthenticate'
// // it checks to see if it's present, and if so, you're considered logged in.

//     handleRegister = e => {
//         e.preventDefault();
//         console.log('inside form submit --> create ACTION')

//         this.props.add_user(this.state)

//     };

//     render() {
//         return (
//             <>
//                 <form onSubmit={this.handleRegister}>
//                     <input type="text" placeholder='User Type'      name="type" onChange={this.handleInputChange}/>
//                     <input type="text" placeholder='First Name'     name="first_name" onChange={this.handleInputChange}/>
//                     <input type="text" placeholder='Last Name'      name="last_name" onChange={this.handleInputChange}/>

//                     <input type="text" placeholder='Username'       name="username" onChange={this.handleInputChange}/>
//                     <input type="text" placeholder='Password'       name="password" onChange={this.handleInputChange}/>
//                     <input type="text" placeholder='Email '         name="email" onChange={this.handleInputChange}/>

//                     <input type="text" placeholder='has insurance?' name="has_insurance" onChange={this.handleInputChange}/>
//                     <input type="text" placeholder='Insurance Name' name="insurance_name" onChange={this.handleInputChange}/>

//                     <button>
//                         Submit
//                     </button>
//                 </form>
//             </>
//         );
//     }

// }

// // Connect
// export default connect(null, {add_user})(RegisterUser)
