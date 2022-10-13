import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    height: 60px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    border: 0;
`;

export const Label = styled.label`
    margin: 5px 3px;
    font-weight: 500;
    font-size: 0.9em;
    color: #6A6A6A;
    cursor: text;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 10px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-weight: 400;
    font-size: 15px;
    color: #6A6A6A;

    :hover {

    }

    :focus {

    }
`;