import React from 'react'
import * as S from './ButtonStyle'

type ButtonProps = {
  text: string
  handleClick?: () => void
  buttonType: 'submit' | 'cancel'
}

function Button(props: ButtonProps) {
  return (
    <S.Container onClick={props.handleClick} buttonType={props.buttonType}>
      {props.text}
    </S.Container>
  )
}

export default Button
