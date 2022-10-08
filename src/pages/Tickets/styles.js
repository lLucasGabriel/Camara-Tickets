import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    background-color: #ECF0F5;
    width: 100%;
`;

export const Tickets = styled.main`
  width: 100%;
  h2 {
    line-height: 19px;
    font-weight: 600;
    margin: 10px 40px;
  }  
`;

export const TicketsTable = styled.section`
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