import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    background-color: #ECF0F5;
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
    background-color: #ffffff;
    width: 100%;
    height: fit-content;

    footer {
        background-color: #ffffff;
        width: 100%;
        height: 60px;
        padding: 0px 100px;
        border-top: solid 1px #ECF0F5;    
    }
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    padding: 15px 100px;
    border-bottom: solid 1px #ECF0F5;
    
    h2 {
        font-weight: 600;
        font-size: 0.95em;
        line-height: 19px;
        color: #37384D;
    }
`;

export const Tip = styled.article`
    background: #84C7AE;
    max-width: 700px;
    border-left: 3px solid #4C7868;
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
    width: 700px;
    height: 400px;
    margin: 15px 100px;
`;