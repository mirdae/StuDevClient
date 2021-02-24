import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { requestAuth } from '../modules/user'

export default (
  WrappedComponent: (props: any) => JSX.Element,
  option: boolean | null
) => {
  // option
  // true > 로그인 된 상태에서 접근가능
  // false> 로그인 안 된 상태에서만 접근가능
  // null > 로그인 유무 상관없음

  const AuthenticateCheck = (props: any) => {
    const dispatch = useDispatch()
    const user_id = useSelector((state) => state.userReducer.id)
    const [auth, _, __] = useCookies(['auth'])

    let isAuth = false
    if (!!user_id) {
      isAuth = true
    } else if (auth.auth) {
      dispatch(requestAuth())
      isAuth = true
    } else {
      isAuth = false
    }

    useEffect(() => {
      if (option) {
        !isAuth && props.history.push('/sign-in')
      } else if (option === false) {
        isAuth && props.history.push('/')
      }
    }, [])

    return <WrappedComponent isAuth={isAuth} props={props} />
  }

  return AuthenticateCheck
}
