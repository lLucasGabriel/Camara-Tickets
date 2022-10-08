import styled from 'styled-components';

export const TableFooter = styled.footer`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    font-size: 13px;

    .lineManagement {
      display: flex;
      align-items: center;
      margin-left: 60px;
    }
    .lineManagement button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: white;
      border: 1.5px solid #ECF0F5;
      border-radius: 2px;
      padding: 3px;
      width: 50px;
      margin-left: 10px;
      cursor: pointer;
    }
    .backForward {
      display: flex;
      align-items: center;
      margin-right: 50px;
    }
    .backForward button{
      display: flex;
      align-items: center;
      background-color: white;
      border: 1.5px solid #ECF0F5;
      border-radius: 2px;
      height: 30px;
      margin-left: 10px;
      cursor: pointer;
    }
    .back svg{
      transform: rotate(90deg);
      width: 20px;
      height: 20px;
      margin-right: 5px;
      stroke: "gray";
    }
    .forward svg{
      transform: rotate(270deg);   
      width: 20px;
      height: 20px;   
      margin-left: 5px;
    }
`;