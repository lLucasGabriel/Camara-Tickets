import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: #ECF0F5;
    width: 100%;
`;

export const DatacenterDashboard = styled.main`
  background: linear-gradient(90deg, ${({theme}) => theme.db_backgroundLeft} 0%, ${({theme}) => theme.db_backgroundRight} 100%);
  height: 100%;
  
  h2 {
    line-height: 19px;
    font-size: 19px;
    font-weight: 600;
    margin: 10px 40px;
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
    width: 520px;
    height: 339px;
    background: linear-gradient(90deg, ${({theme}) => theme.db_container_1} 26.56%, ${({theme}) => theme.db_container_2} 75%, ${({theme}) => theme.db_container_3} 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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