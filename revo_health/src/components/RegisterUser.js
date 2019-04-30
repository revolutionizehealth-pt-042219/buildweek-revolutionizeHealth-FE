// REACT
    import React, { Component } from "react";

// REDUX
    import { connect } from 'react-redux'

// ACTION CREATORS
    import { add_user } from '../actions/a_addUser'

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
    
    handleRegister = e => {
        e.preventDefault();
        console.log('inside form submit --> create ACTION')

        this.props.add_user(this.state)

        
    };
    
    render() {
        return (
            <>
                <form onSubmit={this.handleRegister}>
                    <input type="text" placeholder='User Type'      name="type" onChange={this.handleInputChange}/>
                    <input type="text" placeholder='First Name'     name="first_name" onChange={this.handleInputChange}/>
                    <input type="text" placeholder='Last Name'      name="last_name" onChange={this.handleInputChange}/>

                    <input type="text" placeholder='Username'       name="username" onChange={this.handleInputChange}/>
                    <input type="text" placeholder='Password'       name="password" onChange={this.handleInputChange}/>
                    <input type="text" placeholder='Email '         name="email" onChange={this.handleInputChange}/>

                    <input type="text" placeholder='has insurance?' name="has_insurance" onChange={this.handleInputChange}/>
                    <input type="text" placeholder='Insurance Name' name="insurance_name" onChange={this.handleInputChange}/>
                        
                    <button>
                        Submit
                    </button>
                </form>
            </>
        );
    }   

}


// Connect
export default connect(null, {add_user})(RegisterUser)

