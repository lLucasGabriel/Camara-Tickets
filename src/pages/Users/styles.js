import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 70px;
    height: calc(100vh - 70px);
    display: flex;
    background-color: #ECF0F5;
    width: 100%;
`;

export const Users = styled.main`
  width: 100%;
  h2 {
    font-weight: 500;
    font-size: 1.2em;
    margin: 10px 15px;
  }  
`;

export const TableSection = styled.section`
  background-color: white;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 15px;
    border: 0;
  }

  .head button {
    background-color: #298D8C;
    border: 0;
    border-radius: 5px;
    width: 140px;
    height: 30px;
    color: white;
    font-size: 13px;
    margin-right: 26px;
    cursor: pointer;
  }

  svg {
    fill: 'black'
  }

  td:last-child svg{
      stroke: #524E4E;
      cursor: pointer;
    }

    td:last-child svg:first-child:hover{
      stroke: #007F00;
    }
    td:last-child svg:last-child:hover{
      stroke: #F90000;
  }
`;