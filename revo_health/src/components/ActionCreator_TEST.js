// REACT
    import React, { Component } from 'react'

// REDUX 
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

    import { get_users } from '../actions/a_getUsers'
    import { add_user } from '../actions/a_addUser'
    import { edit_user } from '../actions/a_editUser'

    import { get_procedures } from '../actions/a_getProcedures'
    import { add_procedure } from '../actions/a_addProcedure'
    import { edit_procedure } from '../actions/a_editProcedure'

// Styled Compoennts
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const Styled_div = styled.div`
    display: flex;
    flex-direction: column

    align-items: flex-start;
`;

class TESTcomponent extends Component {
    
    getUsers_onClick = e => {
        e.preventDefault()
        this.props.get_users()
    }
    addUser_onClick = e => {
        e.preventDefault()
        this.props.add_user()
    }
    editUser_onClick = e => {
        e.preventDefault()
        this.props.edit_user()
    }

    getProcedures_onClick = e => {
        e.preventDefault()
        this.props.get_procedures()
    }
    addProcedure_onClick = e => {
        e.preventDefault()
        this.props.add_procedure()
    }
    editProcedure_onClick = e => {
        e.preventDefault()
        this.props.edit_procedure()
    }



    render() {
        return (
            <>
                <h2>HELLO FROM INSIDE TEST COMPONENT</h2>

                <Styled_div>
                    <h5>USER TEST</h5>
                    <button onClick={this.getUsers_onClick}>getUSER_start</button>
                    <button onClick={this.addUser_onClick}>addUSER_start</button>
                    <button onClick={this.editUser_onClick}>editUSER_start</button>
                </Styled_div>
                <Styled_div>
                    <h5>PROCEDURE TEST</h5>
                    <button onClick={this.getProcedures_onClick}>getPROCEDURE_start</button>
                    <button onClick={this.addProcedure_onClick}>addPROCEDURE_start</button>
                    <button onClick={this.editProcedure_onClick}>editPROCEDURE_start</button>
                </Styled_div>
            </>
        )
    }
}

// Map State To Props 
    // NOT NEEDED

// Connect
    export default connect(
        null, {
            get_users,
            add_user,
            edit_user,
            get_procedures,
            add_procedure,
            edit_procedure,
        }
    )(TESTcomponent) 