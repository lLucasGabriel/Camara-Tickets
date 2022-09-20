import React from 'react'
import styled from 'styled-components'
import NavContent from './NavContent'
import Sidebar from './Sidebar'

const Sidenav = styled.nav`
  position: fixed;
  display: flex;
`;

export default () => {
  return (
    <Sidenav>
      <Sidebar/>
      <NavContent/>
    </Sidenav>
  )
}