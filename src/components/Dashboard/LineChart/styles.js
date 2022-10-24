import styled from 'styled-components';

export const Chart = styled.div`
    width: 100%;
    background: linear-gradient(90deg, ${({theme}) => theme.db_container_1} 26.56%, ${({theme}) => theme.db_container_2} 75%, ${({theme}) => theme.db_container_3});
    margin-left: 10px;
    border-radius: 2px;
`;