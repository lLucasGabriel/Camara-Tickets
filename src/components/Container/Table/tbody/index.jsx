import React from 'react'
import styled from 'styled-components'
import Status from '../../Status';
import { ReactComponent as Support } from '../../../../assets/img/Support.svg';
import { ReactComponent as Heart } from '../../../../assets/img/Heart.svg';
import user1 from '../../../Styles/images/user1.png';
import user2 from '../../../Styles/images/user2.png';
import user3 from '../../../Styles/images/user3.png';

const Tbody = styled.tbody`
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

export default () => {
  const Tickets = [
        {
            id: 1,
            request: "Sistema Travando",
            requester: {
                name: "Aldous Huxley",
                email: "aldous.huxley@camarasantos.sp.gov.br"
            },
            Priroity: "low",
            local: {
                floor: "Térreo",
                sector: "Divisão de Recursos Humanos"
            },
            date: "10/04/2022 10:42",
            status: "open"
        },
        {
            id: 2,
            request: "Problema na impressora",
            requester: {
                name: "Shairon Hosokawa",
                email: "shairon.hosokawa@camarasantos.sp.gov.br"
            },
            Priroity: "medium",
            local: {
                floor: "1º Andar",
                sector: "Gabinete do Vereador"
            },
            date: "10/04/2022 10:42",
            status: "progress"
        },
        {
            id: 3,
            request: "Problema na assinatura digital",
            requester: {
                name: "Albert Camus",
                email: "albert.camus@camarasantos.sp.gov.br"
            },
            Priroity: "high",
            local: {
                floor: "Castelinho",
                sector: "Divisão de Almoxerifado e Patrimônio"
            },
            date: "10/04/2022 10:42",
            status: "close"
        }
    ]
    return(
        <Tbody>
            {Tickets.map( ticket => (
              <tr>
                <td>{ticket.id}</td>
                <td>{ticket.request}</td>
                <td>
                  <div className='user'>
                    <img className='userImage' src={user1} alt='User'/>
                    <p className='requester'>
                      <span>{ticket.requester.name}</span>
                      <span>{ticket.requester.email}</span>
                    </p>
                  </div>
                </td>
                <td>
                  <Status color={"green"} text={"Baixa"}/>
                </td>
                <td>
                  <p className='local'>
                    <span>{ticket.local.floor}</span>
                    <span>{ticket.local.sector}</span>
                  </p>
                </td>
                <td>
                  <p>{ticket.date}</p>
                </td>
                <td>
                  <Status color={"green"} text={"Aberto"}/>                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>
            ))}
        </Tbody>
    )
}