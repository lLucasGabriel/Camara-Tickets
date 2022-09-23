import React from 'react'
import * as S from './styles'

import NavContentTitle from '../NavContentTitle'
import OptionButton from '../../../Form/OptionButton'

import { ReactComponent as Add } from '../../../../assets/img/Add.svg'
import { ReactComponent as Ticket } from '../../../../assets/img/Ticket.svg'

export default function TicketManagement() {
  return (
    <S.NavContent>
      <S.NavList>
        <li>
          <NavContentTitle title="Gerenciar Tickets"/>
        </li>
        <li className='navLink'>
          <Add/>
          <p>Novo Ticket</p>
        </li>
        <li className='navLink'>
          <Ticket/>
          <p>Tickets</p>
        </li>
        <li>
          <NavContentTitle title="Configurações"/>
        </li>
        <OptionButton/>
      </S.NavList>
    </S.NavContent>
  )
}