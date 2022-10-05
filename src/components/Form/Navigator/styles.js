import styled from 'styled-components';

export const Nav = styled.nav`
    z-index: 1;
    width: 240px;
    height: 570px;
    background: #FAFAFA;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

    h2 {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 15px;
        line-height: 19px;
        color: #252A36;
        padding: 15px 15px;
        border-bottom: solid 1px  #ECF0F5;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3px 8px;
    }
    
    ul:not(:last-child) {
        border-bottom: solid 1px  #ECF0F5;
    }

    .active {
        background: linear-gradient(90deg, #5CA05A 0%, #3A92AF 100%);
        box-shadow: 0px 0px 10px #84C7AE;
        color: white;
    }

    .active svg {
        fill: white;
    }
`;

export const ListTitle = styled.li`
    align-self: start;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #6A6A6A;
    padding: 18px 10px;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 220px;
    height: 40px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    margin-bottom: 12px;
    cursor: pointer;
    
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.09em;
    color: #6A6A6A;

    svg {
        margin: 0px 10px;
        width: 29px;
        height: 29px;
        fill: #6A6A6A;
    }

    :hover {
        background: linear-gradient(90deg, #5CA05A 0%, #3A92AF 100%);
        box-shadow: 0px 0px 10px #84C7AE;
        color: white;
    }

    :hover svg {
        fill: white;
    }
`;