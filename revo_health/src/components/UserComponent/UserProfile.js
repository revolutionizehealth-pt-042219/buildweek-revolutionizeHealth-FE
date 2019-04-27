// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// MATERIAL UI
    import {
        Card, CardContent,
        // Typography,
        Avatar
    } from '@material-ui/core'

    // import {} from '';

// IMPORT ACTION CREATORS

// Styled Components
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const Styled_Card = styled(Card)`
    display: flex;
    
    width: 33%;
`;

const Styled_CardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


class UserProfile extends Component {

    render() {
        return (
            <Styled_Card className='userProfile'>
                <Styled_CardContent>

                    <Avatar alt="User#" src="" className='avatarIMG' />
                    <ProfileInfo>
                        <h2>Name</h2>
                        <h3>Email</h3>
                        <h4>Favorite Ice Cream</h4>
                    </ProfileInfo>

                </Styled_CardContent>
            </Styled_Card>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(UserProfile)