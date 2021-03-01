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

function Input({
  placeHolder,
  children,
  handleChange,
  value,
  type,
  notice,
  alert,
}: InputProps) {
  return (
    <S.Container notice={notice}>
      <S.Icon>{children}</S.Icon>
      <S.Input
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        type={type}
      />
      <S.Alert>{alert}</S.Alert>
    </S.Container>
  )
}

export default React.memo(Input)
