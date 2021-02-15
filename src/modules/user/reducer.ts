import { UserAction, UserState } from './types'
import AT from './actionTypes'

const initialState: UserState = {
  social_id: '',
  nickname: '',
}

export function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case AT.REQUEST_SIGN_UP_SUCCESS:
      return { ...state }
    case AT.REQUEST_SIGN_UP_ERROR:
      return { ...state }
    case AT.REQUEST_SIGN_IN_SUCCESS:
      return { ...state }
    case AT.REQUEST_SIGN_IN_ERROR:
      return { ...state }
    default:
      return { ...state }
  }
}
