import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from '../../../../assets/img/Arrow.svg';

const TableFooter = styled.footer`
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
    }
    .forward svg{
      transform: rotate(270deg);   
      width: 20px;
      height: 20px;   
      margin-left: 5px;
    }
`;

export default () => {
    return(
        <TableFooter>
          <div className='lineManagement'>
            <p>Mostrar linhas por página</p>
            <button>10<Arrow/></button>
          </div>
          <div className='backForward'>
            <p>1 - 6 de 26</p>
            <button className='back'><Arrow/></button>
            <button className='forward'><Arrow/></button>
          </div>            
        </TableFooter>
    )
}