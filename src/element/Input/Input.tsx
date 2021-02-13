import React from 'react'
import * as S from './InputStyle'

type InputProps = {
  placeHolder: string
  icon: string
}

function Input(props: InputProps) {
  return (
    <S.Container>
      <S.Icon>
        <span className="material-icons-outlined">{props.icon}</span>
      </S.Icon>
      <S.Input placeholder={props.placeHolder}></S.Input>
    </S.Container>
  )
}

export default Input
