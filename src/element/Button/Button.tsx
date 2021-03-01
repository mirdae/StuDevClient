import React from 'react'
import * as S from './ButtonStyle'

type ButtonProps = {
  text: string
  handleClick?: () => void
  buttonType: 'submit' | 'cancel'
}

function Button({ text, handleClick, buttonType }: ButtonProps) {
  return (
    <S.Container onClick={handleClick} buttonType={buttonType}>
      {text}
    </S.Container>
  )
}

export default React.memo(Button)
