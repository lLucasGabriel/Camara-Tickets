import styled from 'styled-components';

export const Tbody = styled.tbody`
    tr:nth-child(even) {
      background-color: #F4F7FB;
    }
    tbody tr:hover {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }
    tr:hover td {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }
    tr:nth-child(even):hover {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }

    .requester, .local {
      display: flex;
      flex-direction: column;
    }
    .requester span:last-child, .local span:last-child {
      margin-top: 2px;
    }

    .user{
      display: flex;
      align-items: center;
    }
    .userImage{
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
`;
