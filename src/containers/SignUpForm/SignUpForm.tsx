import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './SignUpFormStyle'
import { Input } from '../../element/Input/index'
import { Button } from '../../element/Button'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import { requestSignUp, requestDuplicateIdCheck } from '../../modules/user'

function SignUpForm() {
  const dispatch = useDispatch()
  const [socialId, setSocialId] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const idCheckRef = useRef()

  const { isIdDuplicated, isNicknameDuplicated } = useSelector(
    (state) => state.userDuplicateReducer
  )

  const debounceId = (id: string, requestFunc: any) => {
    clearTimeout(idCheckRef.current)
    idCheckRef.current = setTimeout(() => {
      dispatch(requestFunc(id))
    }, 500)
  }

  const SocialIdDuplicateCheck = (e: any) => {
    const id = e.target.value
    debounceId(id, requestDuplicateIdCheck)
    setSocialId(id)
  }

  const handleSignUp = () => {
    console.log({ socialId, password, email, nickname })
    dispatch(requestSignUp({ socialId, password, email, nickname }))
  }

  return (
    <S.Container>
      <Input
        type="text"
        placeHolder="아이디"
        value={socialId}
        handleChange={SocialIdDuplicateCheck}
        notice={socialId === '' ? 'none' : isIdDuplicated}
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        notice="none"
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호 재확인"
        value={checkPassword}
        handleChange={(e) => setCheckPassword(e.target.value)}
        notice="none"
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="이메일"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        notice="none"
      >
        <EmailOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="닉네임"
        value={nickname}
        handleChange={(e) => setNickname(e.target.value)}
        notice="none"
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Button text="회원가입" handleClick={handleSignUp} buttonType="submit" />
      <Link to="/sign-in">로그인</Link>
    </S.Container>
  )
}

export default SignUpForm
