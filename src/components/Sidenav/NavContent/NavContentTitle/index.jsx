import React from 'react'
import styled from 'styled-components'

const NavContentTitle = styled.h1`
  position: relative;
  color: white;
  font-weight: 300;
  font-style: normal;
  font-size: 30px;
  line-height: 24px;
  cursor: default;

  :after {
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.primaryColor};
    height: 3px;
    width: 35%;
    left: 0;
    bottom: -25px;
  }

`;

export default ({title}) => {
  return (
    <NavContentTitle className='title'>
      {title}
    </NavContentTitle>
  )
}