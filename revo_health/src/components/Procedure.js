// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

// COMPONENT


// Styled Compoennts
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const ProcedureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;


    width: 100%;
    border: 1px solid black;

`;

const Procedure_INFO = styled.div`
    display: flex;
`;

const Procedure_Btn_Container = styled.div`
    display: flex
`;

class Procedure extends Component {

    render() {
        return (
            <ProcedureContainer>

                <Procedure_INFO>
                    Procedure INFO
                </Procedure_INFO>

                <Procedure_Btn_Container>
                    Stores Action Buttons
                </Procedure_Btn_Container>
                
            </ProcedureContainer>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(Procedure)