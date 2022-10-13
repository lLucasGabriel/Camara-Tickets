import styled from 'styled-components';

export const NavList = styled.ul`
  position: fixed;
  .navLink {
    width: 240px;
    background-color: ${({ theme }) => theme.secondaryColor};
    display: flex;
    align-items: center;
    margin: 0px 16px;
    margin-bottom: 12px;
    padding: 5px;
    border-radius: 3px;
    transition: background-color 0.5s ease;
    border-left: 2px solid ${({ theme }) => theme.primaryColor};
    cursor: pointer;
  }
  .navLink:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.primaryColor} 0%, ${({ theme }) => theme.secondaryColor} 100%);
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