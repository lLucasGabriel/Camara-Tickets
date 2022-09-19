import React from 'react'
import styled from 'styled-components'
import Chart from './Chart';
import Database from './Database/Database';
import Thermostats from './Thermostats';

const DatacenterDashboard = styled.main`
  background: linear-gradient(90deg, ${({theme}) => theme.secondaryColor} 0%, ${({theme}) => theme.primaryColor} 100%);
  height: 100%;
  
  h2 {
    line-height: 19px;
    font-size: 19px;
    font-weight: 600;
    margin: 10px 40px;
    color: white;
  }

  .dashboard {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .container {
    display: flex;
    justify-content: center;
    width: 520px;
    height: 339px;
    background: #37384D;
    border-radius: 2px;
    padding: 10px;
    padding-left: 20px;
  }

  .container:nth-child(odd) {
    margin-left: 20px
  }

  .container:last-child{
    margin-bottom: 20px;
  }

  .data {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
`;

export default () => {
  return (
    <DatacenterDashboard>
      <h2>Datacenter Dashboard</h2>
        <section className='dashboard'>
          <div className='container'>
            <Database server={"ASA ESQUERDA"}/>
            <div className='data'>
              <Chart/>
              <Thermostats/>
            </div>
          </div>
          <div className='container'>
            <Database server={"CASTELINHO"}/>
            <div className='data'>
              <Chart/>
              <Thermostats/>
            </div>
          </div>
          <div className='container'>
            <Database server={"DATACENTER"}/>
            <div className='data'>
              <Chart/>
              <Thermostats/>
            </div>
          </div>
          <div className='container'>
            <Database server={"AUDITORIO"}/>
            <div className='data'>
              <Chart/>
              <Thermostats/>
            </div>
          </div>
          <div className='container'>
            <Database server={"ASA DIREITA"}/>
            <div className='data'>
              <Chart/>
              <Thermostats/>
            </div>
          </div>
        </section>
    </DatacenterDashboard>
  )
}
