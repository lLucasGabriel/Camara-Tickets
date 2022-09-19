import React, { useState } from 'react'
import styled from 'styled-components'
import NavContentTitle from '../NavContentTitle'
import BurocraticTheme from '../../../Styles/svg/BurocraticTheme'
import PurpleTheme from '../../../Styles/svg/PurpleTheme'
import OrangeTheme from '../../../Styles/svg/OrangeTheme'

const CustomizeApp = styled.ul`
    .navLink:not(.title){
    background-color: #37384D;
    display: flex;
    align-items: center;
    margin: 0px 16px;
    margin-bottom: 12px;
    padding: 5px;
    border-radius: 3px;
    transition: background-color 0.5s ease;
    border-left: 2px solid ${({theme}) => theme.primaryColor};
    cursor: pointer;
  }

  .navLink:not(.title):hover {
    background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
    transition: background-color 0.5s ease;
  }

  .navLink svg {
    margin-left: 5px;
    width: 45px;
    height: 45px;
    fill: ${({theme}) => theme.primaryColor};
  }
  .navLink:hover svg {
    fill: ${({theme}) => theme.contrastColor};
  }
  .navLink:hover p {
    color: white;
  }
  
  .navLink p {
    font-weight: 200;
    font-size: 18px;
    line-height: 17px;
    letter-spacing: 0.09em;
    color: #ffffffca;
    margin-left: 20px;
  }  
`;

export default () => {

  return (
    <CustomizeApp>
      <NavContentTitle title="Personalizar"/>
      <li className='navLink'>
        <BurocraticTheme/>
        <p>Burocratic</p>
      </li>
      <li className='navLink'>
        <PurpleTheme/>
        <p>Midnight Purple</p>
      </li>
      <li className='navLink'>
        <OrangeTheme/>
        <p>Orange</p>
      </li>
    </CustomizeApp>
  )
}