import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.secondaryColorContrast} 100%);
    width: 100%;

    main {
        display: flex;
        width: 100%;
        margin-top: 64px;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #F8FAFC;
    border-radius: 5px;
    height: fit-content;
    margin-left: 15px;

    footer {
        background-color: #ffffff;
        width: 100%;
        height: 60px;
        padding: 0px 100px;
        border-top: solid 1px #ECF0F5;
        border-radius: 0px 0px 5px 5px;    
    }
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    padding: 15px 100px;
    border-bottom: solid 1px #ECF0F5;
    
    h2 {
        font-weight: 500;
        font-size: 0.95em;
        line-height: 19px;
        color: #37384D;
    }
`;

export const Tip = styled.article`
    background: #84C7AE;
    max-width: 700px;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 15px 100px;
    padding: 10px 10px;
    font-size: 15px;
    color: #ffffff;

    p {
        margin-bottom: 5px;
    }
`;

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 20px;
    width: 700px;
    height: 460px;
    margin: 15px 100px;
`;