// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// MATERIAL UI
    import {
        AppBar, Toolbar
    } from '@material-ui/core'

    import MenuIcon from '@material-ui/icons/Menu';

// IMPORT ACTION CREATORS


// Styled Components
    import styled from 'styled-components'


// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const FooterContainer = styled.div`

`;

const Styled_AppBar = styled(AppBar)`
    padding: 0px;
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: column;

    display: flex;
    justify-content: space-around;  
`;

const FooterTitle = styled.div`

`;

const FooterContent_container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100%;


`;
const FooterContent = styled.div`
    display: flex;
    flex-grow: 1;
`;


class Footer extends Component {

    render() {
        return (
            <FooterContainer className='footerContainer'>
                <Styled_AppBar className='AppBar_materialUI' position="static">
                    
                    <StyledToolbar className='ToolBar_materialUI'>

                        <FooterTitle>
                            FOOTER COMPONENT TITLE
                        </FooterTitle>
                        <FooterContent_container>

                            <FooterContent className='footerContent_1'>
                                Footer Content Left
                            </FooterContent>
                            <FooterContent className='footerContent_2'>
                                Footer Content Middle
                            </FooterContent>
                            <FooterContent className='footerContent_3'>
                                Footer Content Right
                            </FooterContent>

                        </FooterContent_container>

                    </StyledToolbar>

                </Styled_AppBar>

            </FooterContainer>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(Footer)