import styled from 'styled-components';


export const Fieldset = styled.fieldset`
    position: relative;
    height: fit-content;
    border: 0;
`;

export const Input = styled.input`
    width: 250px;
    height: 30px;
    padding-left: 10px;
    padding-right: 25px;
    background: #FFFFFF;
    border: 6px solid #CCB8C1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    :focus {
        outline: 0;
        box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
        color: #524E4E;
    }
`;

export const Label = styled.label`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 5px;
    top: 3px;
    width: 24px;
    height: 24px;
    background: #CCB8C1;
    border: 1px solid #FFFFFF;
    border-radius: 25px;
    svg {
        height: 16px;
        width: 16px;
        fill: #524E4E;
    }
`;