import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './SignUpFormStyle'
import { Input } from '../../element/Input/index'
import { Button } from '../../element/Button'
import { Link } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import {
  requestSignUp,
  requestDuplicateIdCheck,
  requestDuplicateNicknameCheck,
} from '../../modules/user'

function SignUpForm() {
  const dispatch = useDispatch()
  const [socialId, setSocialId] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const CheckRef = useRef()

  const [passwordCheck, setPasswordCheck] = useState<
    'none' | 'correct' | 'incorrect'
  >('none')

  const [emailCheck, setEmailCheck] = useState<
    'none' | 'correct' | 'incorrect'
  >('none')

  const { isIdDuplicated, isNicknameDuplicated } = useSelector(
    (state) => state.userDuplicateReducer
  )

  const debounce = (requestFunc: any) => {
    clearTimeout(CheckRef.current)
    CheckRef.current = setTimeout(() => {
      requestFunc()
    }, 500)
  }

  // 아이디체크 (입력값 체크는 아직안함....소문자 영어 이런거)
  const socialIdDuplicateCheck = (e: any) => {
    const id = e.target.value
    debounce(() => dispatch(requestDuplicateIdCheck(id)))
    setSocialId(id)
  }

  // 닉네임체크
  const nicknameDuplicateCheck = (e: any) => {
    const nickname = e.target.value
    debounce(() => dispatch(requestDuplicateNicknameCheck(nickname)))
    setNickname(nickname)
  }
  // 비밀번호체크 > 영어 대, 소문자, 숫자, 특수문자로 구성된 8 - 12 자리의 값을 입력해 주세요.
  const passwordRegExpCheck = (password: string) => {
    const regExp = new RegExp(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,12}$/
    )
    if (regExp.test(password)) {
      setPasswordCheck('correct')
    } else {
      setPasswordCheck('incorrect')
    }
  }

  const changePassword = (e: any) => {
    const password = e.target.value
    debounce(() => passwordRegExpCheck(password))
    setPassword(password)
  }

  // 이메일 입력값 체크
  const emailRegExpCheck = (email: string) => {
    const regExp = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      'i'
    )
    if (regExp.test(email)) {
      setEmailCheck('correct')
    } else {
      setEmailCheck('incorrect')
    }
  }

  const changeEmail = (e: any) => {
    const email = e.target.value
    debounce(() => emailRegExpCheck(email))
    setEmail(email)
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
        handleChange={socialIdDuplicateCheck}
        notice={socialId === '' ? 'none' : isIdDuplicated}
        alert={
          isIdDuplicated === 'incorrect' ? '이미 존재하는 아이디입니다.' : ''
        }
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호"
        value={password}
        handleChange={changePassword}
        notice={password === '' ? 'none' : passwordCheck}
        alert={
          passwordCheck === 'incorrect'
            ? '알파벳, 숫자, 특수문자로 구성된 8 - 12 자리의 값을 입력해 주세요.'
            : ''
        }
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="password"
        placeHolder="비밀번호 재확인"
        value={repeatPassword}
        handleChange={(e) => setRepeatPassword(e.target.value)}
        notice={
          repeatPassword === ''
            ? 'none'
            : repeatPassword === password
            ? 'correct'
            : 'incorrect'
        }
        alert={
          repeatPassword !== '' && repeatPassword !== password
            ? '입력하신 비밀번호와 일치하지 않습니다'
            : ''
        }
      >
        <LockOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="이메일"
        value={email}
        handleChange={changeEmail}
        notice={email === '' ? 'none' : emailCheck}
        alert={
          email !== '' && emailCheck === 'incorrect'
            ? '이메일 형식에 맞게 입력해 주세요.'
            : ''
        }
      >
        <EmailOutlinedIcon />
      </Input>
      <Input
        type="text"
        placeHolder="닉네임"
        value={nickname}
        handleChange={nicknameDuplicateCheck}
        notice={nickname === '' ? 'none' : isNicknameDuplicated}
        alert={
          isNicknameDuplicated === 'incorrect'
            ? '이미 존재하는 닉네임입니다.'
            : ''
        }
      >
        <AccountCircleOutlinedIcon />
      </Input>
      <Button text="회원가입" handleClick={handleSignUp} buttonType="submit" />
      <Link to="/sign-in">로그인</Link>
    </S.Container>
  )
}

export default SignUpForm
