import React from 'react'
import * as S from './SignUpFormStyle'
import { Input } from '../../element/Input/index'
import { Button } from '../../element/Button'
import { Link } from 'react-router-dom'

function SignUpForm() {
  const handleSignUp = () => {}

  return (
    <S.Container>
      <Input placeHolder="아이디" icon="assignment_ind" />
      <Input placeHolder="비밀번호" icon="lock" />
      <Input placeHolder="비밀번호 재확인" icon="lock" />
      <Input placeHolder="이메일" icon="email" />
      <Input placeHolder="닉네임" icon="person" />
      <Button text="회원가입" handleClick={handleSignUp} type="submit" />
      <Link to="/sign-in">로그인</Link>
    </S.Container>
  )
}

export default SignUpForm
