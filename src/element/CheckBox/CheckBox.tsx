import React from 'react'
import * as S from './CheckBoxStyle'

type CheckBoxProps = {
  text: string
  selected?: boolean
  handleClick?: any
}

function CheckBox(props: CheckBoxProps) {
  return (
    <S.Container onClick={props.handleClick} selected={!!props.selected}>
      {props.text}
    </S.Container>
  )
}

export default CheckBox
