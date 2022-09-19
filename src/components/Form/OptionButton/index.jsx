import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  background-color: #ffffffc9;
  border: 2px solid white;
  border-radius: 15px;
  width: 60px;
  height: 30px;
  margin: 0px 16px;
  cursor: pointer;

  div {
    background-color: #ffffffc9;
    border: 2px solid white;
    border-radius: 15px;
    width: 25px;
    height: 25px;
  }

  p {
    
  }
`;

function OptionButton({description}) {
  return (
    <>
      <Button className='Option'>
        <div className='toggle off'></div>
      </Button>
      <p>{description}</p>
    </>
  )
}

export default OptionButton