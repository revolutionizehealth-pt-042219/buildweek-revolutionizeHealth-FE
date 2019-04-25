// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

// COMPONENTS
    import Procedure from './Procedure'

// Styled Components
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const ProceduresContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;

    width: 50%

`;

const PersonalProcedures_TITLE = styled.div`

`;

const Subprocedure_Container = styled.div`
    display: flex;

    width: 100%;


`;

class PersonalProcedures extends Component {

    render() {
        return (
            <ProceduresContainer>

                <PersonalProcedures_TITLE>
                    Personal Procedures TITLE
                </PersonalProcedures_TITLE>

                <Subprocedure_Container className='subProcedure_Container'>
                    {/* 
                        MAP over props --> for each prop
                        render <Procedure /> 
                    */}

                    <Procedure />

                </Subprocedure_Container>


            </ProceduresContainer>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(PersonalProcedures)