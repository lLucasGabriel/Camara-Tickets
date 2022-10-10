import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
#root {
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
}
.themeSwitcher {
    position: absolute;
    right: 323px;
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    padding: 5px;
    border: 0.4px solid #ECF0F5;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;   
    
    :hover {
        background-color: ${({theme}) => theme.primaryColor};
    }
}
`;