import styled from 'styled-components';

export const NavList = styled.ul`
  .navLink:not(:first-child){
    background-color: ${({theme}) => theme.secondaryColor};
    display: flex;
    align-items: center;
    margin: 0px 16px;
    margin-bottom: 12px;
    padding: 5px;
    border-radius: 3px;
    transition: background-color 0.5s ease;
    border-left: 2px solid ${({theme}) => theme.primaryColor};
    cursor: pointer;
  }

  .navLink:not(:first-child):hover {
    background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
  }

  .navLink svg {
    margin-left: 5px;
    width: 40px;
    height: 40px;
    fill: rgba(244, 247, 251, 0.8);
  }
  .navLink:hover svg, p {
    fill: white;
  }
  
  .navLink p {
    font-weight: 200;
    font-size: 0.9em;
    line-height: 17px;
    letter-spacing: 0.09em;
    color: #ffffff;
    margin-left: 20px;
  }
`;

export const ProfileTemplate = styled.li`
    position: relative;

    .profileBackground {
        background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
        border-radius: 5px;
        height: 150px;
        margin: 0px 16px;
    }

    .profileImage {       
        position: absolute;
        border-radius: 50%;
        border: 6px solid ${({theme}) => theme.secondaryColor};
        height: 100px;
        width: 100px;
        left: 85px;
        top: 77px;
    }

    .profileName {
        position: relative;
        color: white;
        font-weight: 400;
        font-weight: 300;
        font-size: 1.4em;
        line-height: 24px;
        margin: 45px 60px 20px 60px;
        text-align: center;
        cursor: default;
    }
`;