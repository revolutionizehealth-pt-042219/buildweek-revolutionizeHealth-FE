// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// Styled Components
import styled from "styled-components";

// IMPORT ACTION CREATOR

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

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

class EditProcedure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }





    render() {

        console.log(this.props.procedure)

        return (
            <>
                <div>
                    <div className='sectionTitle'>
                        Hospital Info
                    </div>
                    <div className='hospital_info'>
                        <input 
                            type='text'
                            name='hospital_name'
                            placeholder={this.props.procedure.hospital_name}
                            />
                        <input 
                            type='text'
                            name='city'
                            placeholder={this.props.procedure.city}
                            />
                        <input 
                            type='text'
                            name='state'
                            placeholder={this.props.procedure.state}
                            />
                        <input 
                            type='text'
                            name='street'
                            placeholder={this.props.procedure.street}
                            />
                        <input 
                            type='text'
                            name='zip'
                            placeholder={this.props.procedure.zip}
                            />
                    </div>
                </div>
                <div>
                    <div className='sectionTitle'>
                        Procedure & Doctor Name
                    </div>
                    <div className='procedure_nameInfo'>
                        <input 
                            type='text'
                            name='procedure_name'
                            placeholder={this.props.procedure.procedure_name}
                            />
                        <input 
                            type='text'
                            name='doctor_name'
                            placeholder={this.props.procedure.procedure_name}
                            />
                    </div>
                </div>
                <div>
                    <div className='sectionTitle'>
                        Cost & Insurance Info
                    </div>
                    <div className='procedure_costInfo'>
                        <input 
                            type='text'
                            name='procedure_cost'
                            placeholder={this.props.procedure.procedure_cost}
                            />   
                        <input 
                            type='text'
                            name='out_of_pocket'
                            placeholder={this.props.procedure.out_of_pocket}
                            />   
                        <input 
                            type='text'
                            name='insurance_adjustment'
                            placeholder={this.props.procedure.insurance_adjustment}
                            />   
                        <input 
                            type='text'
                            name='insurance_payment'
                            placeholder={this.props.procedure.insurance_payment}
                            />   
                    </div>
                </div>
                <Button 
                    size="small" 
                    variant="outlined" 
                    color="secondary"
                    // onClick={this.open_editProcedure}
                >
                    Submit Edited Procedure
                </Button>
            </>
        );
    } 
}

// const mapStateToProps = state => {
//   return {
//     is_loggingIn: state.login_reducer.is_loggingIn
//   };
// };

// Connect
export default connect(
  null,
  {  }
)(EditProcedure);