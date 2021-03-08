import * as actions from './actions'

export type AlertAction =
  | ReturnType<typeof actions.showAlert>
  | ReturnType<typeof actions.hideAlert>

export type AlertState = {
  message: string
  isVisible: boolean
}
