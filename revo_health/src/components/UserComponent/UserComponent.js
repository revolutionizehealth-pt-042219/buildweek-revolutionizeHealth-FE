// REACT
    import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

// COMPONENT
    import Header from "../Header";
        import UserProfile from './UserProfile'
        import PersonalProcedures from './PersonalProcedures'
    import Footer from "../Footer";

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
            <>
            <Header />
                <UserContainer>
                        <UserProfile people={this.props.dummyPatients}/>
                        <PersonalProcedures procedures={this.props.dummyProcedures} />
                </UserContainer>
            <Footer />
            </>
        )
    }
}

// Map State To Props
    const mapStateToProps = state => {
        return {
            dummyPatients: state.dummyPatients,
            dummyProcedures: state.dummyProcedures
        }
    }


// Connect
    export default connect(mapStateToProps, {})(UserComponent)