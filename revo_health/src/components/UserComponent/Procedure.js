// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

// COMPONENT

// MATERIAL UI
    import {
        Card, CardContent,
        Typography,
    } from '@material-ui/core'
    


// Styled Compoennts
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const Styled_Card = styled(Card)`
    display: flex;
    
`;

const Styled_CardContent = styled(CardContent)`
    display: flex;
    justify-content: space-between;

    width: 100%;
    
`;

const ProcedureContent_right = styled.div`
    display: flex;

`;

const ProcedureContent_left = styled.div`
    display: flex;
`;


class Procedure extends Component {

    render() {
        return (
            <>
                <Styled_Card>
                    <Styled_CardContent className='styled_CardContent'>

                        <ProcedureContent_left>
                            content left
                        </ProcedureContent_left>
                        <ProcedureContent_right>
                            content right
                        </ProcedureContent_right>
                        
                    </Styled_CardContent>
                </Styled_Card>
            </>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(Procedure)