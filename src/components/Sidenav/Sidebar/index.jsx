import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Menu } from '../../../assets/img/Menu.svg'
import { ReactComponent as User } from '../../../assets/img/User.svg'
import { ReactComponent as Ticket } from '../../../assets/img/Ticket.svg'
import { ReactComponent as Database } from '../../../assets/img/Database.svg'
import { ReactComponent as Edit } from '../../../assets/img/Edit.svg'

const Sidebar = styled.ul`
  background-color: #454660;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85px;
  height: 100vh;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  
  li:first-child {
    background-color: #454660;
    margin: 20px 0px 40px 0px;
    cursor: pointer;
  }
  li:not(:first-child) {
    background-color: #37384D;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 12px;
    transition: 3s ease-in-out;
    cursor: pointer;
  }
  li:not(:first-child):hover {
    background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
    transition: 3s ease;
  }
  li:hover svg {
    fill: ${({theme}) => theme.contrastColor};
  }
  li:last-child {
    margin-top: auto;
  }

  svg {
    width: 45px;
    height: 45px;
    fill: ${({theme}) => theme.contrastColor}
  }
`;

export default () => {
  return (
    <Sidebar>
      <li>
        <Menu/>
      </li>
      <li>
        <User/>
      </li>
      <li>
        <Ticket/>
      </li>
      <li>
        <Database/>
      </li>
      <li>
        <Edit/>
      </li>
    </Sidebar>
  )
}