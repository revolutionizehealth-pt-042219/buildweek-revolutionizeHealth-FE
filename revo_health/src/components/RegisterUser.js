// REACT
    import React, { Component } from "react";

// Styled Components
    import styled from "styled-components";

// MATERIAL UI


// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// Assets
// import logo from "../assets/RevLogo.svg";

// STYLED COMPONENTS




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
    
// Submitting the form will set a "User" in local storage. within 'withAuthenticate'
// it checks to see if it's present, and if so, you're considered logged in.
    handleLoginSubmit = e => {
        e.preventDefault();
        
    };
    
    render() {
        return (
            <>
                <div>HELLO FROM INSIDE REGISTER</div>
            </>
        );
    }   

}

export default RegisterUser;
