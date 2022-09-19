import React from 'react'
import styled from 'styled-components'
import DatacenterDashboard from './DatacenterDashboard'
import Header from './Header'
import Tickets from './Tickets'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ECF0F5;
    width: 100%;
    margin-left: 425px;
`

export default () => {
  return (
    <Container>
        <Header/>
        <Tickets/>
    </Container>
  )
}