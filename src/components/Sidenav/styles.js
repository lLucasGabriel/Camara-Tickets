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
    z-index: 2;
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
  @media screen and (max-width: 1024px) {
    ul {
      top: 140px;
      height: calc(100vh - 140px);
    }
  }

  @media screen and (max-width: 720px) {
    ul {
      top: 210px;
      height: calc(100vh - 210px);
    }
  }
`;

export const NavContent = styled.div`
    background: linear-gradient(90deg, ${({theme}) => theme.secondaryColor} 0%, ${({theme}) => theme.secondaryColorDark} 100%);
    width: 275px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 1023px) {
      position: fixed;
      left: 70px;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
    }
`;