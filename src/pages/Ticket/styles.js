import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 70px;
    height: calc(100vh - 70px);
    display: flex;
    background-color: #ECF0F5;
    width: 100%;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  h2 {
    position: absolute;
    font-weight: 500;
    font-size: 1.2em;
    margin: 10px 15px;
  }  
  header {
    display: flex;
    justify-content: space-between;
    border-radius: 5px 5px 0px 0px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primaryColor} 0%, ${({ theme }) => theme.secondaryColorContrast} 100%);
    padding: 30px 60px;        
    color: #FFFFFF;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0.09em;  
  }
`;

export const Ticket = styled.section`
    width: 400px;
    height: fit-content;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 65px 15px;

    li {
        padding: 20px 60px;
    }

    li p:first-child{
        font-weight: 600;
        font-size: 1.2em;
        color: #252A36;
    }
    
    li p:last-child{
        font-size: 1.1em;
        color: rgba(37, 42, 54, 0.8);
    }

    li:nth-child(3), li:last-child {
        border-bottom: 2px dashed #F4F7FB;
    }

    img {
        padding: 20px 60px;
    }

`;

export const Attendance = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 787px;
    margin: 65px 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
`;

export const Chat = styled.div`
    width: 100%;
    height: 410px;
    overflow-y: scroll;
    .chatbox {
        position: relative;
        display: flex;
        margin: 20px 60px;
    }

    img {
        position: absolute;
        width: 50px;
        height: 50px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        margin: 25px 0px 0px 65px;
        border-top: 1px solid #ECF0F5;
    }

    .message {
        margin: 0px 23px;
        padding: 20px 45px;
        border-left: 1px solid #ECF0F5;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 60px 50px 60px;
`;