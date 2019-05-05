// REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

// Styled Components
import styled from "styled-components";

// IMPORT ACTION CREATOR
import { add_procedure } from "../actions/a_addProcedure";

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

class AddProcedure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      procedure_name: undefined,
      doctor_name: undefined,
      hospital_name: undefined,
      city: undefined,
      state: undefined,
      zip: undefined,
      street: undefined,
      procedure_cost: undefined,
      insurance_payment: undefined,
      insurance_adjustment: undefined,
      out_of_pocket: undefined,
      anonymous: undefined
    };
  }

  // When typing in the username/password, it gets saved into state.
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault();

    this.props.add_procedure(this.state);
  };

  render() {
    return (
      <RegisterContainer className="registerContainer">
        <StyledPaper>
          <LogoWrapper>
            <AppLogo src={logo} alt="" />
          </LogoWrapper>

          <Typography component="h1" variant="h5">
            ADD PROCEDURE
          </Typography>

          <form onSubmit={this.handleRegister} className="form">
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Procedure Name</InputLabel>
              <Input
                value={this.state.type}
                onChange={this.handleInputChange}
                name="procedure_name"
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Doctor Name</InputLabel>
              <Input
                value={this.state.type}
                onChange={this.handleInputChange}
                name="doctor_name"
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Hospital Name</InputLabel>
              <Input
                name="hospital_name"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>City</InputLabel>
              <Input
                name="city"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>State</InputLabel>
              <Input
                name="state"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>zip</InputLabel>
              <Input
                name="zip"
                type="password"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>street</InputLabel>
              <Input
                name="street"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Procedure Cost</InputLabel>
              <Input
                name="procedure_cost"
                value={this.state.has_insurance}
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Insurance Payment</InputLabel>
              <Input
                name="insurance_payment"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Insurance Adjustment</InputLabel>
              <Input
                name="insurance_adjustment"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Out of Pocket Cost</InputLabel>
              <Input
                name="out_of_pocket"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Anonymous</InputLabel>
              <Select
                name="anonymous"
                value={this.state.type}
                onChange={this.handleInputChange}
              >
                <MenuItem value={"Yes"}>Yes Post ANON</MenuItem>
                <MenuItem value={"No"}>No Make My Shit Public</MenuItem>
              </Select>
            </FormControl>

            <StyledButton
              className="register"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Add Procedure
            </StyledButton>

            <StyledButton
              className="register"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              component={Link}
              to="/"
            >
              Go Back
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
  { add_procedure }
)(AddProcedure);
