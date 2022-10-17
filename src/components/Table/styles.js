import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    //TABLE

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

    //TBODY

    tr:nth-child(even) {
      background-color: #F4F7FB;
    }
    tbody tr:hover {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }
    tr:hover td {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }
    tr:nth-child(even):hover {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }

    .requester, .local {
      display: flex;
      flex-direction: column;
    }
    .requester span:last-child, .local span:last-child {
      margin-top: 2px;
    }

    .user{
      display: flex;
      align-items: center;
    }
    .userImage{
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
`;