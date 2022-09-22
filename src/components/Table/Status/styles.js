import styled from 'styled-components'

export const Status = styled.div`
    p {
        border-radius: 20px;
        width: fit-content;
        padding: 4px 15px;
        font-weight: 700;
    }

    .low, .open {
        background-color: #DDFFCD;
        color: #007F00;
    }

    .medium, .progress {
        background-color: #FFE6C0;
        color: #F99500;
    }

    .high, .closed {
        background-color: #FFD3D3;
        color: #F90000;;
    }

`;
