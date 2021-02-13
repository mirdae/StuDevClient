import React from 'react'
import * as S from './SignInFormStyle'
import { Input } from '../../element/Input/index'
import { Button } from '../../element/Button'
import { Link } from 'react-router-dom'

function SignInForm() {
  const handleSignIn = () => {}

  return (
    <S.Container>
      <Input placeHolder="아이디" icon="assignment_ind" />
      <Input placeHolder="비밀번호" icon="lock" />
      <Button text="로그인" handleClick={handleSignIn} type="submit" />
      <Link to="/sign-up">회원가입</Link>
    </S.Container>
  )
}

export default SignInForm
