import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import * as S from './SignInStyle'
import { SignInForm } from '../../containers/SignInForm'
import { Header } from '../../components/Header'

type SignInProps = {
  isAuth: boolean
  props: any
}

function SignIn({ isAuth, props }: SignInProps) {
  return (
    <S.Container>
      <Header isAuth={false} isMain={false} isSignPage={true} />
      <SignInForm props={props}></SignInForm>
    </S.Container>
  )
}

export default SignIn
