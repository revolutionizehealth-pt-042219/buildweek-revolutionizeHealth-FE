// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS


// Styled Components
    import styled from 'styled-components'


// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content : center;

    padding: 0px 20px 
    border: 1px solid black;
`;

const Footer_Title = styled.div`


`;


class Footer extends Component {

    render() {
        return (
            <FooterContainer>

                <Footer_Title>
                    Footer Info
                </Footer_Title>

            </FooterContainer>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(Footer)