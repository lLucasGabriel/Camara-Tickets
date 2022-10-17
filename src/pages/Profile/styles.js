import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    width: 100%;

    nav {
        margin-top: 70px;
    }

    main {
        display: flex;
        background-image: url('assets/img/background.png');
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 0px 125px 30px rgba(0, 0, 0, 0.35);
        width: 100%;
    }
`;

export const Section = styled.section`
    align-self: flex-end;
    background: linear-gradient(90deg, ${({ theme }) => theme.primaryColor} 0%, ${({ theme }) => theme.secondaryColorContrast} 100%);
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    gap: 50px;
    `;

export const Settings = styled.div`
    align-self: flex-end;
    background-color: #F8FAFC;
    border-radius: 5px 5px 0px 0px;
    width: 780px;
    height: calc(100% + 30px);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

    h3 {
        margin: 5px 3px;
        font-weight: 500;
        font-size: 0.9em;
        padding: 15px 60px;
        color: #6A6A6A;
        cursor: text;
    }
    
    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        column-gap: 20px;
        height: 400px;
        margin: 20px 60px;
    }

`;

export const Header = styled.div`
        border-radius: 5px 5px 0px 0px;
        background: linear-gradient(90deg, ${({ theme }) => theme.primaryColor} 0%, ${({ theme }) => theme.secondaryColorContrast} 100%);
        padding: 30px 60px;        

        h2 {
        color: #FFFFFF;
        font-size: 1.2em;
        font-weight: 500;
        letter-spacing: 0.09em;  
    }
`;

export const Card = styled.div`
    position: relative;
    align-self: flex-end;
    background-color: #F8FAFC;
    border-radius: 5px 5px 0px 0px;
    width: 470px;
    height: calc(100% + 30px);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

    img {
        position: absolute;
        top: -75px;
        right: 50px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 144px;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 15px;
        width: 150px;
        height: 150px;
        color: #FFFFFF;
        margin: 10px;
        background: ${({ theme }) => theme.primaryColor};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }

    span:first-child {
        font-size: 1.5em;
    }
`;