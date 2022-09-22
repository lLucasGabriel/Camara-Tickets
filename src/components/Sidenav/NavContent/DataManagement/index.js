import React from 'react'

import * as S from './styles'

import NavContentTitle from '../NavContentTitle'
import { ReactComponent as Data } from '../../../../assets/img/Data.svg'
import { ReactComponent as Printer } from '../../../../assets/img/Printer.svg'
import { ReactComponent as Nagios } from '../../../../assets/img/Nagios.svg'

export default () => {
  return (
    <S.NavContent>
      <S.NavList>
        <li className='navLink'>
        <NavContentTitle title="Dispositivos de Rede"/>
        </li>
        <li className='navLink'>
          <Data/>
          <p>Datacenter Dashboard</p>
        </li>
        <li className='navLink'>
          <Printer/>
          <p>Visualizar Impressoras</p>
        </li>
        <li className='navLink'>
          <Nagios/>
          <p>Nagios</p>
        </li>
      </S.NavList>
    </S.NavContent>
  )
}