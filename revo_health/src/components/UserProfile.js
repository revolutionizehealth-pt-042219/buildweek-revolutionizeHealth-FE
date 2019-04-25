// REACT
import React, { Component } from 'react'

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS

// Styled Components
    import styled from 'styled-components'

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const UserContainer = styled.div`
    position: relative

    display: flex; 
    flex-direction: column;
    align-items: center;

    width: 50%

    .profileBorder {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black
    }

`;

const UserProfile_TITLE = styled.div`

`;

const ProfileIMG = styled.div`

    
    
`;

const ProfileInfo = styled.div`
    display: flex;

`;

const EditUserProfile = styled.div`
    display: absolute
`;

class UserProfile extends Component {

    render() {
        return (
            <UserContainer>

                <UserProfile_TITLE>
                    User Profile TITLE
                </UserProfile_TITLE>
                <div className='profileBorder'>
                    <ProfileIMG>
                        ProfileIMG
                        {/* 
                            Make CIRCLE / Material UI 
                            component w/ img as background
                        */}
                    </ProfileIMG>

                    <ProfileInfo>
                        Personal Info
                    </ProfileInfo>
                </div>

                <EditUserProfile>
                    {/* 
                        this is a button position absolutly based
                        on UserContainer
                    */}
                </EditUserProfile>

            </UserContainer>
        )
    }
}

// Map State To Props

// Connect
    export default connect(null, {})(UserProfile)