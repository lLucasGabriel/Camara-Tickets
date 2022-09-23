import React from 'react'
import * as S from './styles'

import UserPreferences from './NavContent/UserPreferences'
import DataManagement from './NavContent/DataManagement'
import TicketManagement from './NavContent/TicketManagement'
import CustomizeApp from './NavContent/CustomizeApp'

import { ReactComponent as Menu } from '../../assets/img/Menu.svg'
import { ReactComponent as User } from '../../assets/img/User.svg'
import { ReactComponent as Ticket } from '../../assets/img/Ticket.svg'
import { ReactComponent as Database } from '../../assets/img/Database.svg'
import { ReactComponent as Edit } from '../../assets/img/Edit.svg'

export default function Sidenav() {
  return (
    <S.Sidenav>
      <S.Sidebar>
        <li>
          <Menu/>
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
      <UserPreferences/>
      <DataManagement/>
      <TicketManagement/>
      <CustomizeApp/>
    </S.Sidenav>
  )
}