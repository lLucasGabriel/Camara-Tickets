import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    display: flex;
    align-items: center;
    height: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 6px solid ${({ theme }) => theme.primaryColor};
    border-radius: 25px;
    background-color: white;

    &.gray {
        border-color: #ECF0F5;
    }

    :hover {
        box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
    }
`;

export const Input = styled.input`
    width: 250px;
    height: 20px;
    padding-left: 10px;
    padding-right: 25px;
    background: #FFFFFF;
    border: 0;
    border-radius: 25px 0px 0px 25px;
    
    :focus {
        outline: 0;
        color: #524E4E;
    }
    
`;

export const Label = styled.label`
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