import React from 'react'
import * as S from './styles'

export default function NavContentTitle({title}) {
  return (
    <S.NavContentTitle className='title'>
      {title}
    </S.NavContentTitle>
  )
}