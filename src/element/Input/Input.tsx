import React from 'react'
import * as S from './InputStyle'

type InputProps = {
  placeHolder: string
  children: any
  handleChange?: (e: any) => void
  value?: string
  type: 'text' | 'password'
  notice: 'correct' | 'incorrect' | 'none'
  alert?: string | undefined
}

function Input(props: InputProps) {
  return (
    <S.Container notice={props.notice}>
      <S.Icon>{props.children}</S.Icon>
      <S.Input
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.handleChange}
        type={props.type}
      />
      <S.Alert>{props.alert}</S.Alert>
    </S.Container>
  )
}

export default Input
