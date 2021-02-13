import * as actions from './actions'

export type UserAction =
  | ReturnType<typeof actions.requestUserInfo>
  | ReturnType<typeof actions.requestSignUp>
  | ReturnType<typeof actions.requestSignIn>
  | ReturnType<typeof actions.requestEditUserInfo>
  | ReturnType<typeof actions.requestLogout>

export type UserState = {
  social_id: string
  nickname: string
  password?: string
}
