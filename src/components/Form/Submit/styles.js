import styled from 'styled-components';

export const Input = styled.input`
    position: absolute;
    bottom: -60px;
    width: 110px;
    height: 29px;
    background-color: #6ECE3B;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    border-bottom: 2px solid #417127;
    border-radius: 5px;
    font-weight: 400;
    font-size: 0.9em;
    color: #FFFFFF;
    cursor: pointer;
    
    :focus {
        background-color: #6CBF40;
        box-shadow: none;
    }
`;