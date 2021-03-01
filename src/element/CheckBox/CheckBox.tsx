import React from 'react'
import * as S from './CheckBoxStyle'

type CheckBoxProps = {
  text: string
  selected?: boolean
  handleClick?: any
}

function CheckBox({ text, selected, handleClick }: CheckBoxProps) {
  return (
    <S.Container onClick={handleClick} selected={!!selected}>
      {text}
    </S.Container>
  )
}

export default React.memo(CheckBox)
