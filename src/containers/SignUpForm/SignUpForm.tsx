import React, { useState } from 'react'
import * as S from './SignUpFormStyle'
import { Input } from '../../element/Input/index'
import { Button } from '../../element/Button'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'

function SignUpForm() {
  const [socialId, setSocialId] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')

  const handleSignUp = () => {
    console.log({ socialId, password, email, nickname })
  }

  return (
    <S.Container>
      <Input
        type="text"
        placeHolder="아이디"
        value={socialId}
        handleChange={(e) => setSocialId(e.target.value)}
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호 재확인"
        value={checkPassword}
        handleChange={(e) => setCheckPassword(e.target.value)}
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="이메일"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      >
        <EmailOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="닉네임"
        value={nickname}
        handleChange={(e) => setNickname(e.target.value)}
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Button text="회원가입" handleClick={handleSignUp} type="submit" />
      <Link to="/sign-in">로그인</Link>
    </S.Container>
  )
}

export default SignUpForm
