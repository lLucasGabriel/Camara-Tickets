import styled from "styled-components";

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