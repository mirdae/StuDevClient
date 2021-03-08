import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import * as S from './AlertStyle'

function Alert(): ReactElement {
  const { message, isVisible } = useSelector((state) => state.alertReducer)
  return <S.Container isVisible={isVisible}>{message}</S.Container>
}

export default Alert
