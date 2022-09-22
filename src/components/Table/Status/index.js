import React from 'react'
import * as S from './styles'

export default function Status({ status, text }) {
  return (
    <S.Status>
        <p className={status}>• {text}</p>
    </S.Status>
  )
}