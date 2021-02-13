import AT from './actionTypes'

export const requestUserInfo = () => ({
  type: AT.REQUEST_GET_USER_INFO,
})

export const requestSignUp = (userInfo: any) => ({
  type: AT.REQUEST_SIGN_UP,
  payload: userInfo,
})

export const requestSignIn = (userInfo: any) => ({
  type: AT.REQUEST_SIGN_IN,
  payload: userInfo,
})

export const requestEditUserInfo = (userInfo: any) => ({
  type: AT.REQUEST_EDIT_USER_INFO,
  payload: userInfo,
})

export const requestLogout = () => ({
  type: AT.REQUEST_LOGOUT,
})
