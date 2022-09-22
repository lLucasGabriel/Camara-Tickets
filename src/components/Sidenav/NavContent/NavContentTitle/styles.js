import styled from 'styled-components'

export const NavContentTitle = styled.h1`
  position: relative;
  color: white;
  font-weight: 300;
  font-style: normal;
  font-size: 30px;
  line-height: 24px;
  margin: 30px 12px 55px 16px;
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