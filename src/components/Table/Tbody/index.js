import React from 'react'
import * as S from './styles'

import Status from '../Status';
import tickets from './tickets.json'

import user1 from '../../../components/Styles/images/user1.png';
import { ReactComponent as Support } from '../../../assets/img/Support.svg';
import { ReactComponent as Heart } from '../../../assets/img/Heart.svg';

export default function Tbody() {
    return(
        <S.Tbody>
            {tickets.map( ticket => (
              <tr key={ticket.id}>
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
                  <Status status={ticket.priroity} text={ticket.priroity}/>
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
                  <Status status={ticket.status} text={ticket.status}/>                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>
            ))}
        </S.Tbody>
    )
}