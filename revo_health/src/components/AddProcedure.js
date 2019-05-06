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

import TextField from '@material-ui/core/TextField';



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
      user_id: this.props.currentUser.id,
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

    this.props.add_procedure(this.state)
      .then(() => this.props.history.push('/'))
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
                name="procedure_name"
                value={this.state.procedure_name}
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Doctor Name</InputLabel>
              <Input
                name="doctor_name"
                value={this.state.doctor_name}
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Hospital Name</InputLabel>
              <Input
                name="hospital_name"
                value={this.state.hospital_name}
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>City</InputLabel>
              <Input
                name="city"
                value={this.state.city}
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>State</InputLabel>
              <Input
                name="state"
                value={this.state.state}
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>zip</InputLabel>
              <Input
                name="zip"
                // value={this.state.zip}
                type='number'
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>street</InputLabel>
              <Input 
                name="street"
                value={this.state.street}
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Procedure Cost</InputLabel>
              <Input
                name="procedure_cost"
                value={this.state.procedure_cost}
                type="number"
                // value={this.state.has_insurance}
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Insurance Payment</InputLabel>
              <Input
                name="insurance_payment"
                type="number"
                value={this.state.insurance_payment}
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Insurance Adjustment</InputLabel>
              <Input
                name="insurance_adjustment"
                type="number"
                value={this.state.insurance_adjustment}
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Out of Pocket Cost</InputLabel>
              <Input
                name="out_of_pocket"
                type="number"
                value={this.state.out_of_pocket}
                onChange={this.handleInputChange}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>Anonymous</InputLabel>
              <Select
                inputProps={{
                  name:"anonymous",
                }}
                value={this.state.anonymous}
                onChange={this.handleInputChange}
              >
                <MenuItem value={true}>Yes Post Anonumously</MenuItem>
                <MenuItem value={false}>No Make My UserName Public On This Procedure</MenuItem>
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
  return {
    currentUser: state.users_reducer.currentUser,
  };
};

// Connect
export default connect(
  mapStateToProps,
  { add_procedure }
)(AddProcedure);
