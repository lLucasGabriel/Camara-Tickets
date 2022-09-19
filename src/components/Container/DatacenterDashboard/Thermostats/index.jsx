import React from 'react'
import styled from 'styled-components'

const Thermostats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 336px;
    height: 157px;
    background: #37384D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    cursor: default;
`;

const TemperatureThermostat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 141px;
    height: 144px;
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(239, 142, 33, 0.5);

    .color {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 128px;
        height: 132px;
        background: linear-gradient(90deg, #EF8E21 0%, #F35309 50.52%, #C32131 100%);
    }

    .divisor {
        position: absolute;
        top: 97px;
        border-radius: 50px 50px 100% 100%;
        width: 77px;
        height: 39px;
        background: #ffffff;
    }

    .values {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 98px;
        height: 102px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .legend {
        width: 65px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: rgba(55, 56, 77, 0.8);
    }

    .value {
        width: 65px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 100.02%;
        text-align: center;
        color: #37384D;
    }
`;

const UmidityThermostat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 141px;
    height: 144px;
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #B4DEFA;

    .color {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 128px;
        height: 132px;
        background: linear-gradient(90deg, #B4DEFA 0%, #54BBFF 50.52%, #0099FF 100%);
    }

    .divisor {
        position: absolute;
        top: 97px;
        border-radius: 50px 50px 100% 100%;
        width: 77px;
        height: 39px;
        background: #ffffff;
    }

    .values {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;   
        border-radius: 50%;
        width: 98px;
        height: 102px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .legend {
        width: 65px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: rgba(55, 56, 77, 0.8);
    }

    .value {
        width: 65px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 100.02%;
        text-align: center;
        color: #37384D;
    }
`;

export default () => {
  return (
    <Thermostats>
        <TemperatureThermostat>
            <div className='color'>
                <div className='values'>
                    <span className='legend'>Max 28</span>
                    <span className='value'>24</span>
                    <span className='legend'>Calor</span>
                </div>
                <div className='divisor'></div>
            </div>
        </TemperatureThermostat>
        <UmidityThermostat>
            <div className='color'>
                <div className='values'>
                    <span className='value'>25%</span>
                    <span className='legend'>Umidade</span>
                </div>
                <div className='divisor'></div>
            </div>
        </UmidityThermostat>
    </Thermostats>
  )
}