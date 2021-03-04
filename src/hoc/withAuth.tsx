import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { requestAuth } from '../modules/user'

function withAuth(
  WrappedComponent: (props: any) => JSX.Element,
  option: boolean | null
) {
  // option
  // true > 로그인 된 상태에서 접근가능
  // false> 로그인 안 된 상태에서만 접근가능
  // null > 로그인 유무 상관없음

  const AuthenticateCheck = (props: any) => {
    const dispatch = useDispatch()
    const user_id = useSelector((state) => state.userReducer.id)
    const [auth, _, __] = useCookies(['auth'])

    if (!user_id && !!auth.auth) {
      dispatch(requestAuth())
    }

    useEffect(() => {
      if (option) {
        !user_id && props.history.push('/sign-in')
      } else if (option === false) {
        !!user_id && props.history.push('/')
      }
    }, [])

    return <WrappedComponent props={props} />
  }

  return AuthenticateCheck
}

export default withAuth
