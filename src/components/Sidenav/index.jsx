import React from 'react'
import styled from 'styled-components'
import NavContent from './NavContent'
import Sidebar from './Sidebar'

const Nav = styled.nav`
  position: fixed;
  display: flex;
`;

function Sidenav() {
  return (
    <Nav>
      <Sidebar/>
      <NavContent/>
    </Nav>
  )
}

export default Sidenav