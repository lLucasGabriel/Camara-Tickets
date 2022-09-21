import React from 'react'
import styled from 'styled-components'
import user1 from '../../../../Styles/images/user1.png';

const ProfileTemplate = styled.li`
    position: relative;

    .profileBackground {
        background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
        border-radius: 5px;
        height: 160px;
        margin: 0px 16px;
    }

    .profileImage {       
        position: absolute;
        border-radius: 50%;
        border: 6px solid #2D2E40;
        height: 120px;
        width: 120px;
        left: 109px;
        top: 77px;
    }

    .profileName {
        position: relative;
        color: #ffffff;
        font-weight: 400;
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 24px;
        margin: 45px 60px 20px 60px;
        text-align: center;
        cursor: default;
    }
`

function ProfileImage() {
  return (
    <ProfileTemplate>
        <div className='profileBackground'></div>
        <img src={user1} className='profileImage' alt='User'/>
        <h2 className='profileName'>Aldous Huxley</h2>
    </ProfileTemplate>
  )
}

export default ProfileImage