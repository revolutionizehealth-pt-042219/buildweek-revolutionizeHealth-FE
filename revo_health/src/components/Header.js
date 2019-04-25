// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

// Styled Components
    import styled from 'styled-components'


// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content : space-between;

    padding: 0px 20px 
    border: 1px solid black;
`;

const HeaderTitle = styled.div`
    display: flex;

    border: .5px dashed black
    font-size: 50px;
`;

const HeaderMenu = styled.div`
    display: flex;

    border: .5px dashed black
    font-size: 25px;
`;


class Header extends Component {

    render() {
        return (
            <HeaderContainer>
                <HeaderTitle>
                    Header
                </HeaderTitle>

                <HeaderMenu>
                    Menu
                </HeaderMenu>
            </HeaderContainer>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(Header)