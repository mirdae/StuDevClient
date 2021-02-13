import React from 'react'
import * as S from './ButtonStyle'

type ButtonProps = {
  text: string
  handleClick: () => void
  type: 'submit'
}

function Button(props: ButtonProps) {
  return <S.Container onClick={props.handleClick}>{props.text}</S.Container>
}

export default Button
