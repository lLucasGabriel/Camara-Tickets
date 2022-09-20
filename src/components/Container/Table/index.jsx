import React from 'react'
import styled from 'styled-components'
import Tbody from './Tbody';
import Thead from './Thead';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: start;
      border: 2px solid #ECF0F5;
      border-collapse: collapse;
      padding: 10px;
    }
    th div {
      display: flex;
      align-items: center;
    }
    th div p {
      font-weight: 800;
      font-size: 13px;
      line-height: 11px;
      margin-left: 10px;
    }
    span:nth-child(2) {
      color: #8A8A8A;
    }
    th:first-child, td:first-child, td:last-child {
      text-align: center;
    }

    td:last-child svg{
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    td:last-child svg:first-child:hover{
      fill: #007F00;
    }
    td:last-child svg:last-child:hover{
      fill: #F90000;
    }

    th, td {
      font-size: 13px;
      line-height: 11px;
      font-weight: 400;
      border: 2px solid #ECF0F5;
      border-collapse: collapse;
      padding: 10px;
    }
    td:first-child {
      width: 70px;
    }
    td:last-child svg:last-child{
      margin-left: 10px
    }
    table svg {
      width: 17px;
      height: 17px;
      fill: black
    }
`;

export default () => {
  return (
    <Table>
        <Thead/>
        <Tbody/>
    </Table>
  )
}