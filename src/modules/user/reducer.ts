import {
  UserAction,
  UserState,
  DuplicateCheckAction,
  UserDuplicateState,
} from './types'
import AT from './actionTypes'

const initialState: UserState = {
  id: 0,
  socialId: '',
  nickname: '',
  isRegistered: false,
}

export function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case AT.REQUEST_SIGN_UP_SUCCESS:
      return { ...state, isRegistered: action.payload }
    case AT.REQUEST_SIGN_UP_ERROR:
      return { ...state, isRegistered: action.payload }

    case AT.REQUEST_SIGN_IN_SUCCESS:
      console.log(action)
      return {
        ...state,
        id: action.payload.user.id,
        socialId: action.payload.user.social_id,
        nickname: action.payload.user.nickname,
      }
    case AT.REQUEST_SIGN_IN_ERROR:
      return { ...state }
    case AT.REQUEST_AUTH_SUCCESS:
      console.log(action)
      return {
        ...state,
        id: action.payload.user.id,
        socialId: action.payload.user.social_id,
        nickname: action.payload.user.nickname,
      }
    case AT.REQUEST_AUTH_ERROR:
      return { ...state }
    default:
      return { ...state }
  }
}

const initialDuplicateCheckState: UserDuplicateState = {
  isIdDuplicated: 'none',
  isNicknameDuplicated: 'none',
}

export function userDuplicateReducer(
  state: UserDuplicateState = initialDuplicateCheckState,
  action: DuplicateCheckAction
): UserDuplicateState {
  switch (action.type) {
    case AT.REQUEST_DUPLICATE_ID_CHECK_SUCCESS:
      return {
        ...state,
        isIdDuplicated: action.payload ? 'incorrect' : 'correct',
      }
    case AT.REQUEST_DUPLICATE_ID_CHECK_ERROR:
      return { ...state }
    case AT.REQUEST_DUPLICATE_NICKNAME_CHECK_SUCCESS:
      return {
        ...state,
        isNicknameDuplicated: action.payload ? 'incorrect' : 'correct',
      }
    case AT.REQUEST_DUPLICATE_NICKNAME_CHECK_ERROR:
      return { ...state }
    default:
      return { ...state }
  }
}
