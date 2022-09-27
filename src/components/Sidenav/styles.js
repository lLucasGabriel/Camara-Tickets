import styled from 'styled-components';

export const Sidenav = styled.nav`
  display: flex;

  .close {
    display: none;
  }

  .open {
    display: flex;
  }
`;

export const Sidebar = styled.ul`
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

export const NavContent = styled.div`
    background: linear-gradient(90deg, #2D2E40 0%, #343549 100%);
    width: 340px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
`;