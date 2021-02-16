import React, { useState } from 'react'
import * as S from './SignUpFormStyle'
import { Input } from '../../element/Input/index'
import { Button } from '../../element/Button'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'

type SignUpFormProps = {
  socialId: string
  setSocialId: any
  password: string
  setPassword: any
  checkPassword: string
  setCheckPassword: any
  email: string
  setEmail: any
  nickname: string
  setNickname: any
  handleSignUp: any
}

function SignUpForm(props: SignUpFormProps) {
  return (
    <S.Container>
      <Input
        type="text"
        placeHolder="아이디"
        value={props.socialId}
        handleChange={(e) => props.setSocialId(e.target.value)}
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호"
        value={props.password}
        handleChange={(e) => props.setPassword(e.target.value)}
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호 재확인"
        value={props.checkPassword}
        handleChange={(e) => props.setCheckPassword(e.target.value)}
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="이메일"
        value={props.email}
        handleChange={(e) => props.setEmail(e.target.value)}
      >
        <EmailOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="닉네임"
        value={props.nickname}
        handleChange={(e) => props.setNickname(e.target.value)}
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Button
        text="회원가입"
        handleClick={props.handleSignUp}
        buttonType="submit"
      />
      <Link to="/sign-in">로그인</Link>
    </S.Container>
  )
}

export default SignUpForm
