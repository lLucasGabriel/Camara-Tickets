import React from 'react'
import styled from 'styled-components'
import TicketsTable from './TicketsTable';

const Tickets = styled.main`
  h2 {
    line-height: 19px;
    font-weight: 600;
    margin: 10px 40px;
  }  
`;

export default () => {
  return (
    <Tickets>
        <h2>Tickets</h2>
        <TicketsTable/>
    </Tickets>
  )
}