import React from 'react'
import styled from 'styled-components'
import Table from '../../Table';
import Thead from '../../Table/Thead';
import Tbody from '../../Table/Tbody';
import TableFooter from '../../Table/TableFooter';
import { ReactComponent as Search } from '../../../../assets/img/Search.svg';

const TicketsTable = styled.section`
  background-color: white;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 0;
  }
  .search {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 0;
  }
  .search input{
    width: 260px;
    height: 30px;
    padding: 5px;
    border: 2px solid #BABABA;
    border-radius: 2px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 13px;
    margin-left: 10px;
  }
  .search input::placeholder {
    color: #BABABA;
  }
  .search svg {
    width: 30px;
    height: 30px;
    margin: 0px 10px;
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
`;

export default () => {
  return (
    <TicketsTable>
      <div className='head'>
        <fieldset className='search'>
          <label htmlFor="search">
            <Search/>
          </label>
          <input type="text" name='search' placeholder='Filtre por título, local ou solicitante'/>
        </fieldset>
        <button>+ Novo Ticket</button>
      </div>
        <Table>
            <Thead/>
            <Tbody/>
        </Table>
        <TableFooter/>
    </TicketsTable>
  )
}