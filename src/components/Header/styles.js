import styled from 'styled-components';

export const Container = styled.header`
    z-index: 3;
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 15px;
    height: 70px;
    background: linear-gradient(90deg, ${({theme}) => theme.secondaryColor} 0%, ${({theme}) => theme.secondaryColorContrast} 100%);
    transition: background-color 0.5s ease;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    &.transparent {
        background: linear-gradient(90deg, ${({theme}) => theme.secondaryColor} 345px, rgba(149, 126, 144, 0) 345px);
        transition: background-color 0.5s ease;
        box-shadow: none;
    }
    
    @media screen and (max-width: 1023px) {
        flex-direction: column;
        height: 140px;

        fieldset {
            align-self: flex-start;
            position: fixed;
            left: 15px;
            top: 90px;
        }
    }

    @media screen and (max-width: 720px) {
        justify-content: space-between;
        height: 210px;
    }
`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    width: 345px;
    border-right: 1px solid #3F3544;

    h1 {
        width: 260px;
        padding-left: 15px;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 1023px) {
        align-self: flex-start;
        justify-content: space-between;
        border: 0;
        border-bottom: 1px solid #3F3544;
        width: 100%;

        h1 {
            width: fit-content;
            margin-right: 15px;
        }
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

    @media screen and (max-width: 1023px) {
        border-bottom: 0;
    }
`;

export const Tools = styled.div`
    margin-left: auto;
    display: flex;
    justify-self: end;
    align-items: center;
    gap: 15px;

    svg {
        fill: "white";
        height: 40px;
        width: 40px;
        padding: 5px;
        border: 0.4px solid #ECF0F5;
        border-radius: 2px;
        cursor: pointer;
    }

    svg:hover {
        background-color: ${({theme}) => theme.primaryColor};
    }

    @media screen and (max-width: 1023px) {
        align-self: flex-start;
        border: 0;
    }

    @media screen and (max-width: 720px) {
        margin-bottom: 15px;
    }
`;

export const UserTools = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-right: 15px;
    border: 0.4px solid #ECF0F5;
    border-radius: 2px;
    height: 40px;
    padding: 5px;

    .profileImage {
        width: 30px;
        height: 30px;
        border-radius: 50px;
    }
    svg {
        border: 0;
        height: 20px;
        width: 30px;
    }
    :hover {
        background-color: ${({theme}) => theme.primaryColor};
    }
    cursor: pointer;
`;

export const Username = styled.div`
    color: white;
    font-weight: 400;
    font-size: 0.75em;
    line-height: 15px;
    p:last-child {
        font-size: 0.9em;
    }
`;