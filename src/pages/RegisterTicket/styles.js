import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ECF0F5;
    width: 100%;

    main {
        display: flex;
        width: 100%;
        height: 100vh;
        align-items: center;
        margin-bottom: 20%;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: 570px;
`;

export const Title = styled.h2`
    align-self: flex-start;
    width: 100%;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #37384D;
    padding: 15px 100px;
    border-bottom: solid 1px #ECF0F5;
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 150px;
    width: 700px;
    height: 400px;
    margin: 15px 100px;
`;

export const CheckboxLabel = styled.p`
    font-weight: 400;
    font-size: 15px;
    color: #6A6A6A;
`;

export const Checkbox = styled.fieldset`
    height: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 0;

    input {
        background: none;
        border: 1px solid #C4C4C4;
        border-radius: 10px;
        color: #6A6A6A;
    }
    
    input:checked {
        background-color: #4C7868;
    }

    label {
        font-weight: 400;
        font-size: 15px;
        color: #6A6A6A;
        margin-right: 10px;
    }
`;