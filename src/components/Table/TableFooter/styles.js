import styled from 'styled-components';

export const TableFooter = styled.footer`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    font-size: 13px;
    color: #524e4e;

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
      border: 0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 2px;
      padding: 3px 5px;
      width: 60px;
      height: 30px;
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
      justify-content: center;
      background-color: white;
      border: 0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 2px;
      height: 30px;
      width: 30px;
      margin-left: 10px;
      cursor: pointer;
    }
    .back svg{
      transform: rotate(90deg);
      margin-right: 5px;
      stroke: "gray";
    }
    .forward svg{
      transform: rotate(270deg);     
      margin-left: 5px;
    }
`;