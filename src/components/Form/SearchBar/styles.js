import styled from 'styled-components';


export const Fieldset = styled.fieldset`
    position: relative;
    height: fit-content;
    border: 0;

    .gray {
        border-color: #ECF0F5;
    }
    `;

export const Input = styled.input`
    width: 250px;
    height: 30px;
    padding-left: 10px;
    padding-right: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    border: 6px solid ${({ theme }) => theme.primaryColor};
    
    :focus {
        outline: 0;
        box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
        color: #524E4E;
    }
`;

export const Label = styled.label`
    position: absolute;
    right: 5px;
    top: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid #FFFFFF;
    border-radius: 25px;

    .gray {
        background-color: #ECF0F5;
    }
    `;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 25px;
    width: 22px;
    height: 22px;

    svg {
        height: 16px;
        width: 16px;
        fill: ${({ theme }) => theme.svgColor};
    }
`;