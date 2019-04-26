// REACT
    import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

// COMPONENT
    import UserProfile from './UserProfile'
    import PersonalProcedures from './PersonalProcedures'

// Styled Compoennts
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const UserContainer = styled.div`
    display: flex; 


`;

class UserComponent extends Component {

    render() {
        return (
            <UserContainer>
                
                <UserProfile />
                <PersonalProcedures />
                
            </UserContainer>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(UserComponent)