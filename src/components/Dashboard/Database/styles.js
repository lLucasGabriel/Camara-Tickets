import styled from 'styled-components';

export const Database = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 139px;
  background: linear-gradient(90deg, #37384D 0%, #5E65DF 5.21%, #3EE6FD 51.04%, #5E65DF 96.88%, #7827B6 100%);

  .block {
    display: flex;
    flex-direction: column;
    width: 155px;
    height: 60px;
    background: linear-gradient(90deg, #F2E5F3 26.56%, #FFFFFF 75%, #C2C1FF 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }

  .block:not(:last-child) {
    margin-bottom: 15px;
  }

  .block p:first-child {
    margin-top: 6px;
    width: 173px;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 1.005em;
    color: #7827B6;
  }
  .block p:last-child {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
    color: rgba(55, 56, 77, 0.8);
  }

  .block:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 71px;
    height: 34px;
    background: linear-gradient(90deg, #F2E5F3 26.56%, #FFFFFF 75%, #C2C1FF 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }

  .inside {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 63px;
    height: 27px;
    background: linear-gradient(99.72deg, #37384D 35.69%, #8664E7 135.69%);
    border-radius: 2px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: linear-gradient(90deg, #F2E5F3 26.56%, #FFFFFF 75%, #C2C1FF 100%);
    border-radius: 59px;
  }
`;
