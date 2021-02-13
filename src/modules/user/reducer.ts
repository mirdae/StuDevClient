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
    case AT.REQUEST_GET_USER_INFO_SUCCESS:
      return { ...state }
    case AT.REQUEST_GET_USER_INFO_ERROR:
      return { ...state }
    default:
      return { ...state }
  }
}
