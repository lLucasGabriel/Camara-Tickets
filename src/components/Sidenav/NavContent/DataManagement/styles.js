import styled from "styled-components"

export const NavList = styled.ul`
.navLink{
background-color: #37384D;
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

.navLink:hover {
background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
transition: background-color 0.5s ease;
}

.navLink svg {
margin-left: 5px;
width: 45px;
height: 45px;
fill: ${({theme}) => theme.primaryColor};
}
.navLink:hover svg {
fill: ${({theme}) => theme.contrastColor};
}
.navLink:hover p {
color: white;
}

.navLink p {
font-weight: 200;
font-size: 18px;
line-height: 17px;
letter-spacing: 0.09em;
color: #ffffffca;
margin-left: 20px;
}
`;