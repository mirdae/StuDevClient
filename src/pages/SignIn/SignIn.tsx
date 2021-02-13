import React from 'react'
import * as S from './SignInStyle'
import { SignInForm } from '../../containers/SignInForm'
import { Header } from '../../components/Header'

function SignIn() {
  return (
    <S.Container>
      <Header />
      <SignInForm></SignInForm>
    </S.Container>
  )
}

export default SignIn
