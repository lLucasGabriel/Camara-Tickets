import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    position: relative;
    height: 60px;
    display: flex;
    flex-direction: column;
    border: 0;

    input:focus ~ label,
    input:valid ~ label {
        top: -0.5rem;
        font-size: 0.8rem;
        left: 0.8rem;
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5rem;
    font-weight: 400;
    font-size: 15px;
    background-color: #ffffff;
    color: #6A6A6A;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
`;

export const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 344px;
    padding: 12px 10px;
    background: none;
    border: 1px solid #C4C4C4;
    outline: none;
    border-radius: 10px;
    font-weight: 400;
    font-size: 15px;
    color: #6A6A6A;

    :hover {
        border: 1px solid #6A6A6A;
    }

    :focus {
        border: 1px solid #5CA05A;
    }
`;