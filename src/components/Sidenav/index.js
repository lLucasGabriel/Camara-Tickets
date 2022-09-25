import React, { useState } from 'react'
import * as S from './styles'

import UserPreferences from './NavContent/UserPreferences'

import { ReactComponent as Open } from '../../assets/img/Open.svg'
import { ReactComponent as Close } from '../../assets/img/Close.svg'
import { ReactComponent as User } from '../../assets/img/User.svg'
import { ReactComponent as Ticket } from '../../assets/img/Ticket.svg'
import { ReactComponent as Database } from '../../assets/img/Database.svg'
import { ReactComponent as Edit } from '../../assets/img/Edit.svg'

export default function Sidenav() {
  const [aberto, setAberto] = useState(false);
  return (
    <S.Sidenav>
      <S.Sidebar>
        <li>
          {aberto ? (
            <Close onClick={() => setAberto(!aberto)}/>
          ) : (
            <Open onClick={() => setAberto(!aberto)}/>
          )}
        </li>
        <li>
          <User/>
        </li>
        <li>
          <Ticket/>
        </li>
        <li>
          <Database/>
        </li>
        <li>
          <Edit/>
        </li>
      </S.Sidebar>
      <UserPreferences className={
        aberto ? (
          "openMenu"
        ) : (
          "closedMenu"
        )
      }/>
    </S.Sidenav>
  )
}