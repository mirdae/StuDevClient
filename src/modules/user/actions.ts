import AT from './actionTypes'
import { UserState } from './types'
//requestUserInfo
export const requestUserInfo = () => ({
  type: AT.REQUEST_GET_USER_INFO,
})

export const requestUserInfoSuccess = () => ({
  type: AT.REQUEST_GET_USER_INFO_SUCCESS,
})

export const requestUserInfoError = () => ({
  type: AT.REQUEST_GET_USER_INFO_ERROR,
})

//requestSignUp
export const requestSignUp = (userInfo: UserState) => ({
  type: AT.REQUEST_SIGN_UP,
  payload: userInfo,
})

export const requestSignUpSuccess = () => ({
  type: AT.REQUEST_SIGN_UP_SUCCESS,
})

export const requestSignUpError = () => ({
  type: AT.REQUEST_SIGN_UP_ERROR,
})

//requestSignIn
export const requestSignIn = (userInfo: any) => ({
  type: AT.REQUEST_SIGN_IN,
  payload: userInfo,
})
export const requestSignInSuccess = (userInfo: any) => ({
  type: AT.REQUEST_SIGN_IN_SUCCESS,
  payload: userInfo,
})
export const requestSignInError = (userInfo: any) => ({
  type: AT.REQUEST_SIGN_IN_ERROR,
  payload: userInfo,
})

//requestEditUserInfo
export const requestEditUserInfo = (userInfo: any) => ({
  type: AT.REQUEST_EDIT_USER_INFO,
  payload: userInfo,
})
export const requestEditUserInfoSuccess = (userInfo: any) => ({
  type: AT.REQUEST_EDIT_USER_INFO_SUCCESS,
  payload: userInfo,
})
export const requestEditUserInfoError = (userInfo: any) => ({
  type: AT.REQUEST_EDIT_USER_INFO_ERROR,
  payload: userInfo,
})

//requestLogout
export const requestLogout = () => ({
  type: AT.REQUEST_LOGOUT,
})

export const requestLogoutSuccess = () => ({
  type: AT.REQUEST_LOGOUT_SUCCESS,
})

export const requestLogoutError = () => ({
  type: AT.REQUEST_LOGOUT_ERROR,
})
