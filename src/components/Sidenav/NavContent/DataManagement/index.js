import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

import NavContentTitle from '../NavContentTitle'
import { ReactComponent as Data } from '../../../../assets/img/Data.svg'
import { ReactComponent as Printer } from '../../../../assets/img/Printer.svg'
import { ReactComponent as Nagios } from '../../../../assets/img/Nagios.svg'

export default function DataManagement() {
  return (
    <S.NavList>
      <li>
      <NavContentTitle title="Dispositivos de Rede"/>
      </li>
      <Link to={'/'}>
        <li className='navLink'>
          <Data/>
          <p>Datacenter Dashboard</p>
        </li>
      </Link>
      <li className='navLink'>
        <Printer/>
        <p>Visualizar Impressoras</p>
      </li>
      <li className='navLink'>
        <Nagios/>
        <p>Nagios</p>
      </li>
    </S.NavList>
  )
}