import React from 'react'
import styled from 'styled-components'

const Chart = styled.div`
    width: 336px;
    height: 157px;
    background: linear-gradient(90deg, #F2E5F3 26.56%, #FFFFFF 75%, #C2C1FF 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export default () => {
  return (
    <Chart></Chart>
  )
}