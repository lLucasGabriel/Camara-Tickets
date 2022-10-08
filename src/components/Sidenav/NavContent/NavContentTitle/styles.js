import styled from 'styled-components';

export const NavContentTitle = styled.h1`
  position: relative;
  color: white;
  font-weight: 300;
  font-style: normal;
  font-size: 1.5em;
  line-height: 24px;
  margin: 25px 12px 45px 16px;
  cursor: default;

  :after {
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.primaryColor};
    height: 2px;
    width: 35%;
    left: 0;
    bottom: -20px;
  }

`;