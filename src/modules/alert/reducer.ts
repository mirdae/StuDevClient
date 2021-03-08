import { AlertAction, AlertState } from './types'
import AT from './actionTypes'

const initialAlertState: AlertState = {
  message: '',
  isVisible: false,
}

export function alertReducer(
  state: any = initialAlertState,
  action: AlertAction
): AlertState {
  switch (action.type) {
    case AT.SHOW_ALERT:
      return {
        message: action.payload,
        isVisible: true,
      }
    case AT.HIDE_ALERT:
      return initialAlertState
    default:
      return state
  }
}
