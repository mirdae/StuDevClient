import React from 'react'
import * as S from './SignUpStyle'
import { SignUpForm } from '../../containers/SignUpForm'
import { Header } from '../../components/Header'

function SignUp() {
  return (
    <S.Container>
      <Header />
      <SignUpForm></SignUpForm>
    </S.Container>
  )
}

export default SignUp
