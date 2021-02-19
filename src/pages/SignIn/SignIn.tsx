import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import * as S from './SignInStyle'
import { SignInForm } from '../../containers/SignInForm'
import { Header } from '../../components/Header'

function SignIn(props: any) {
  const userId = useSelector((state) => state.userReducer.id)
  useEffect(() => {
    console.log(userId)
    if (userId) {
      props.history.push('/')
    }
  })

  return (
    <S.Container>
      <Header isAuth={false} isMain={false} isSignPage={true} />
      <SignInForm></SignInForm>
    </S.Container>
  )
}

export default SignIn
