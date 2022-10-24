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

export const Sidebar = styled.div`
  width: 70px;  
  ul {
    z-index: 1;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    background-color: ${({theme}) => theme.sidebarColor};
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 70px);
    width: 70px;
  }
  
  li:first-child {
    background-color: ${({theme}) => theme.sidebarColor};
    margin: 20px 0px 30px 0px;
    cursor: pointer;
  }
  li:not(:first-child) {
    background-color:  ${({theme}) => theme.secondaryColor};
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
  }
  li:hover svg {
    fill: white;
  }
  li:last-child {
    margin-top: auto;
  }

  svg {
    width: 40px;
    height: 40px;
    fill: rgba(244, 247, 251, 0.8);
  }
`;

export const NavContent = styled.div`
    background: linear-gradient(90deg, ${({theme}) => theme.secondaryColor} 0%, ${({theme}) => theme.secondaryColorDark} 100%);
    transition: background-color 0.5s ease;
    width: 275px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
`;