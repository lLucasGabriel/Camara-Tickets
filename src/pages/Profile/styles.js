import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    width: 100%;

    nav {
        margin-top: 70px;
    }

    main {
        display: flex;
        background-image: url('assets/img/background.png');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
    }
`;

export const Section = styled.section`
    background: linear-gradient(to bottom, rgba(149, 126, 144, 0) 45%, #ECF5F5 45%);
    width: 100%;
    height: 100%;
`;

export const Settings = styled.div`

`;

export const Card = styled.div`

`;