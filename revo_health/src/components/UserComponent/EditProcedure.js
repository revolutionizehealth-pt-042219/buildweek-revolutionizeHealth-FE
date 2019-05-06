// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// Styled Components
import styled from "styled-components";

// IMPORT ACTION CREATOR
    import { edit_procedure } from '../../actions/a_editProcedure'


// MATERIAL UI

import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";

// Assets


// STYLED COMPONENTS
// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: linear-gradient(
//     to right top,
//     #264075,
//     #526695,
//     #7e8fb5,
//     #abbad6,
//     #dce6f7
//   );
//   height: 98vh;
// `;

// const LogoWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;

//   background-color: #264075;
//   border-radius: 2%;
//   margin-bottom: 10px;
// `;

// const AppLogo = styled.img`
//   height: 20vh;
// `;

// const Styled_Avatar = styled(Avatar)`
//   display: flex;
//   justify-content: center;
// `;

// const StyledPaper = styled(Paper)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   margin-top: 30px;
//   padding: 20px;
// `;

// const StyledButton = styled(Button)`
//   margin-top: 30px;
// `;


const Styled_buttonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50%
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledEditInfoSection = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class EditProcedure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            
            procedure_name: undefined, 
            hospital_name: undefined,
            city: undefined,
            state: undefined,
            zip: undefined,
            street: undefined,
            doctor_name: undefined,
            specialization: undefined,
            procedure_cost: undefined,
            insurance_payment: undefined,
            insurance_adjustment: undefined,
            out_of_pocket: undefined,
            anonymous: this.props.procedure.anonymous,
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submit_editProcedure = e => {
        e.preventDefault()
        this.props.edit_procedure(this.state)
    }



    render() {

        console.log(this.props.procedure)

        return (
            <StyledDiv>
                <StyledEditInfoSection>
                    <div className='sectionTitle'>
                        Hospital Info
                    </div>
                    <div className='hospital_info'>

                        <input 
                            type='text'
                            id='hospital_name'
                            name='hospital_name'
                            placeholder={this.props.procedure.hospital_name}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type='text'
                            name='city'
                            placeholder={this.props.procedure.city}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type='text'
                            name='state'
                            placeholder={this.props.procedure.state}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type='text'
                            name='street'
                            placeholder={this.props.procedure.street}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type='number'
                            name='zip'
                            placeholder={this.props.procedure.zip}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </StyledEditInfoSection>
                <StyledEditInfoSection>
                    <div className='sectionTitle'>
                        Procedure & Doctor Name
                    </div>
                    <div className='procedure_nameInfo'>
                        <input 
                            type='text'
                            name='procedure_name'
                            placeholder={this.props.procedure.procedure_name}
                            onChange={this.handleInputChange}
                            />
                        <input 
                            type='text'
                            name='doctor_name'
                            placeholder={this.props.procedure.doctor_name}
                            onChange={this.handleInputChange}
                            />
                    </div>
                </StyledEditInfoSection>
                <StyledEditInfoSection>
                    <div className='sectionTitle'>
                        Cost & Insurance Info
                    </div>
                    <div className='procedure_costInfo'>
                        <input 
                            type='number'
                            name='procedure_cost'
                            placeholder={this.props.procedure.procedure_cost}
                            onChange={this.handleInputChange}
                            />   
                        <input 
                            type='number'
                            name='out_of_pocket'
                            placeholder={this.props.procedure.out_of_pocket}
                            onChange={this.handleInputChange}
                            />   
                        <input 
                            type='number'
                            name='insurance_adjustment'
                            placeholder={this.props.procedure.insurance_adjustment}
                            onChange={this.handleInputChange}
                            />   
                        <input 
                            type='number'
                            name='insurance_payment'
                            placeholder={this.props.procedure.insurance_payment}
                            onChange={this.handleInputChange}
                            />   
                    </div>
                </StyledEditInfoSection>
                {/* <StyledEditInfoSection>
                    <div className='sectionTitle'>
                        Anonymous??
                    </div>
                    <div className='procedure_costInfo'>
                        <input 
                            type='number'
                            name='procedure_cost'
                            placeholder={this.props.procedure.procedure_cost}
                            onChange={this.handleInputChange}
                            />   
                    </div>
                </StyledEditInfoSection> */}
                <Styled_buttonDiv className='button'>
                    <Button 
                        size="small" 
                        variant="outlined" 
                        color="secondary"
                        onClick={this.submit_editProcedure}
                    >
                        Submit Edited Procedure
                    </Button>
                </Styled_buttonDiv>
            </StyledDiv>
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
  { edit_procedure }
)(EditProcedure);