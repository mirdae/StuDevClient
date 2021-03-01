import React from 'react'
import * as S from './SignUpStyle'
import { SignUpForm } from '../../containers/SignUpForm'
import { Header } from '../../components/Header'

type SignUpProps = {
  props: any
}

function SignUp({ props }: SignUpProps) {
  return (
    <S.Container>
      <Header isMain={false} isSignPage={true} />
      <SignUpForm props={props}></SignUpForm>
    </S.Container>
  )
}

export default SignUp
