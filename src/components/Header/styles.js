import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
    background: linear-gradient(90deg, #433848 0%, #957E90 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    width: 250px;

    h1 {
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }
`;

export const Arms = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border: 1px solid #3F3544;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: #CCB8C1;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
    }
    img {
        width: 40px;
        height: 40px;
        margin: auto;
    }
`;

export const Tools = styled.div`

`;

export const UserTools = styled.div`

`;


/*
export const Head = styled.header`
    background: linear-gradient(90deg, #2D2E40 0%, #343549 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 0px;

    .title {
        display: flex;
        align-items: center;
    }
    .title img {
        margin: 0px 16px;
        width: 40px;
        height: 40px;
    }
    .title h1 {
        color: white;
        font-weight: 600;
        font-size: 25px;
        line-height: 24px;
        cursor: default;
    }

    .userTools {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 340px;
        margin: 0px 10px;
    }
    .userTools svg {
        fill: ${({theme}) => theme.contrastColor};
    }
    .userProfile{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
        border-radius: 50px;
        width: 260px;
        height: 30px;
        margin: 0px 10px;
    }

    .profileImage {
        width: 30px;
        height: 30px;
        background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColor} 100%);
        border: 2px solid white;
        border-radius: 50px;
    }

    .userProfile p {
        position: relative;
        color: white;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        cursor: default;
    }
    .userProfile svg {
        margin: 0px 10px
    }
`;
*/