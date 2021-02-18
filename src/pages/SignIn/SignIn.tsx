import React from 'react'
import * as S from './SignInStyle'
import { SignInForm } from '../../containers/SignInForm'
import { Header } from '../../components/Header'

function SignIn() {
  return (
    <S.Container>
      <Header isAuth={false} isMain={false} isSignPage={true} />
      <SignInForm></SignInForm>
    </S.Container>
  )
}

export default SignIn
