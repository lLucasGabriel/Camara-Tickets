import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  height: 100%;
  display: flex;
  background-color: #ECF0F5;
  width: 100%;
`;

export const DatacenterDashboard = styled.main`
  background: linear-gradient(90deg, ${({theme}) => theme.db_backgroundLeft} 0%, ${({theme}) => theme.db_backgroundRight} 100%);
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .head {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: linear-gradient(90deg, ${({theme}) => theme.db_container_1} 26.56%, ${({theme}) => theme.db_container_2} 75%, ${({theme}) => theme.db_container_3});
    border-radius: 2px;
  }

  svg {
    fill: '#37384D';
    margin-right: 10px;
  }
  
  h2 {
    line-height: 19px;
    font-size: 19px;
    font-weight: 600;
    color: ${({theme}) => theme.db_title};
  }

  .dashboard {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;
    border-radius: 2px;
  }

  .db_container {
    width: 270px;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, ${({theme}) => theme.db_container_1} 26.56%, ${({theme}) => theme.db_container_2} 75%, ${({theme}) => theme.db_container_3});
  }

  .data {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`;