import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import * as S from './SignInStyle'
import { SignInForm } from '../../containers/SignInForm'
import { Header } from '../../components/Header'

type SignInProps = {
  props: any
}

function SignIn({ props }: SignInProps) {
  return (
    <S.Container>
      <Header isMain={false} isSignPage={true} />
      <SignInForm props={props}></SignInForm>
    </S.Container>
  )
}

export default SignIn
