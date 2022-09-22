import React from 'react'
import styled from 'styled-components'
import DataManagement from './NavContent/DataManagement';
import Sidebar from './Sidebar'

const Sidenav = styled.nav`
  position: fixed;
  display: flex;
`;

export default () => {
  return (
    <Sidenav>
      <Sidebar/>
      <DataManagement/>
    </Sidenav>
  )
}