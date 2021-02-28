import AT from './actionTypes'
import { UserState } from './types'
//requestAuth
export const requestAuth = () => ({
  type: AT.REQUEST_AUTH,
})

export const requestAuthSuccess = (userInfo: UserState) => ({
  type: AT.REQUEST_AUTH_SUCCESS,
  payload: userInfo,
})

export const requestAuthError = (userInfo: UserState) => ({
  type: AT.REQUEST_AUTH_ERROR,
  payload: userInfo,
})

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

export const requestSignUpSuccess = (userInfo: any) => ({
  type: AT.REQUEST_SIGN_UP_SUCCESS,
  payload: userInfo,
})

export const requestSignUpError = (userInfo: any) => ({
  type: AT.REQUEST_SIGN_UP_ERROR,
  payload: userInfo,
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

export const requestLogoutSuccess = (result: any) => ({
  type: AT.REQUEST_LOGOUT_SUCCESS,
  payload: result,
})

export const requestLogoutError = (result: any) => ({
  type: AT.REQUEST_LOGOUT_ERROR,
  payload: result,
})

//requestDuplicateIdCheck
export const requestDuplicateIdCheck = (id: string) => ({
  type: AT.REQUEST_DUPLICATE_ID_CHECK,
  payload: id,
})

export const requestDuplicateIdCheckSuccess = (result: boolean) => ({
  type: AT.REQUEST_DUPLICATE_ID_CHECK_SUCCESS,
  payload: result,
})

export const requestDuplicateIdCheckError = (result: boolean) => ({
  type: AT.REQUEST_DUPLICATE_ID_CHECK_ERROR,
  payload: result,
})

//requestDuplicateNicknameCheck
export const requestDuplicateNicknameCheck = (nickname: string) => ({
  type: AT.REQUEST_DUPLICATE_NICKNAME_CHECK,
  payload: nickname,
})

export const requestDuplicateNicknameCheckSuccess = (result: boolean) => ({
  type: AT.REQUEST_DUPLICATE_NICKNAME_CHECK_SUCCESS,
  payload: result,
})

export const requestDuplicateNicknameCheckError = (result: boolean) => ({
  type: AT.REQUEST_DUPLICATE_NICKNAME_CHECK_ERROR,
  payload: result,
})
