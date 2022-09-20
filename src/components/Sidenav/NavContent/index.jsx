import React from 'react'
import styled from 'styled-components'
import UserPreferences from './UserPreferences/index'

const NavContent = styled.ul`
  background: linear-gradient(90deg, #2D2E40 0%, #343549 100%);
  width: 340px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
  
  .title {
    margin: 30px 12px 55px 16px;
  }

  .hide {
    display: none;
  }
`

export default () => {
  return (
    <NavContent>
      <UserPreferences/>
    </NavContent>
  )
}