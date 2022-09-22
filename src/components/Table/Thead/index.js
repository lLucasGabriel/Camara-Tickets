import React from 'react'
import * as S from './styles'

import { ReactComponent as Profile } from '../../../assets/img/Profile.svg';
import { ReactComponent as Ticket } from '../../../assets/img/Ticket.svg';
import { ReactComponent as Clock } from '../../../assets/img/Clock.svg';
import { ReactComponent as Home } from '../../../assets/img/Home.svg';

export default ({}) => {
  return (
    <S.Thead>
      <tr>
        <th>
          #
        </th>
        <th>
          <div>
            <Ticket/>
            <p>TÍTULO</p>
          </div>
        </th>
        <th>
          <div>
            <Profile/>
            <p>SOLICITANTE</p>
          </div>
        </th>
        <th>
          <div>
            <Clock/>
            <p>PRIORIDADE</p>
          </div>
        </th>
        <th>
          <div>
            <Home/>
            <p>LOCAL</p>
          </div>
        </th>
        <th>
          <div>
            <Clock/>
            <p>ABERTURA</p>
          </div>
        </th>
        <th>
          <div>
            <Clock/>
            <p>STATUS</p>
          </div>
        </th>
        <th>
        </th>
      </tr>
    </S.Thead>
  )
}