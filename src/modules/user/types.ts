import * as actions from './actions'

export type UserActions =
  | ReturnType<typeof actions.requestAuth>
  | ReturnType<typeof actions.requestAuthSuccess>
  | ReturnType<typeof actions.requestAuthError>
  | ReturnType<typeof actions.requestUserInfo>
  | ReturnType<typeof actions.requestUserInfoSuccess>
  | ReturnType<typeof actions.requestUserInfoError>
  | ReturnType<typeof actions.requestSignUp>
  | ReturnType<typeof actions.requestSignUpSuccess>
  | ReturnType<typeof actions.requestSignUpError>
  | ReturnType<typeof actions.requestSignIn>
  | ReturnType<typeof actions.requestSignInSuccess>
  | ReturnType<typeof actions.requestSignInError>
  | ReturnType<typeof actions.requestEditUserInfo>
  | ReturnType<typeof actions.requestEditUserInfoSuccess>
  | ReturnType<typeof actions.requestEditUserInfoError>
  | ReturnType<typeof actions.requestLogout>
  | ReturnType<typeof actions.requestLogoutSuccess>
  | ReturnType<typeof actions.requestLogoutError>

export type UserAction =
  | ReturnType<typeof actions.requestSignInSuccess>
  | ReturnType<typeof actions.requestSignInError>
  | ReturnType<typeof actions.requestSignUpSuccess>
  | ReturnType<typeof actions.requestSignUpError>

export type DuplicateCheckAction =
  | ReturnType<typeof actions.requestDuplicateIdCheckSuccess>
  | ReturnType<typeof actions.requestDuplicateIdCheckError>
  | ReturnType<typeof actions.requestDuplicateNicknameCheckSuccess>
  | ReturnType<typeof actions.requestDuplicateNicknameCheckError>

export type UserState = {
  socialId: string
  nickname: string
  password?: string
  email?: string
  id?: number
  isRegistered?: boolean
}

export type UserDuplicateState = {
  isIdDuplicated: 'incorrect' | 'correct' | 'none'
  isNicknameDuplicated: 'incorrect' | 'correct' | 'none'
}
