import styled from 'styled-components';

export const Input = styled.input`
    width: 110px;
    height: 29px;
    background-color: #84C7AE;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    border-bottom: 2px solid #567569;
    border-radius: 5px;
    font-weight: 400;
    font-size: 0.9em;
    color: #FFFFFF;
    cursor: pointer;
    
    :focus {
        background-color: #719D8D;
        box-shadow: none;
    }
`;