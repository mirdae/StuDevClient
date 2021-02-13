import React, { EventHandler, FormEventHandler } from 'react'
import * as S from './InputStyle'

type InputProps = {
  placeHolder: string
  children: any
  handleChange?: (e: any) => void
  value?: string
  type: 'text' | 'password'
}

function Input(props: InputProps) {
  return (
    <S.Container>
      <S.Icon>{props.children}</S.Icon>
      <S.Input
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.handleChange}
        type={props.type}
      />
    </S.Container>
  )
}

export default Input
