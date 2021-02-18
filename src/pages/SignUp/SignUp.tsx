import React from 'react'
import * as S from './SignUpStyle'
import { SignUpForm } from '../../containers/SignUpForm'
import { Header } from '../../components/Header'

function SignUp() {
  return (
    <S.Container>
      <Header isAuth={false} isMain={false} isSignPage={true} />
      <SignUpForm></SignUpForm>
    </S.Container>
  )
}

export default SignUp
