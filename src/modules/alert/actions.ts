import AT from './actionTypes'

export const showAlert = (message: string) => ({
  type: AT.SHOW_ALERT,
  payload: message,
})

export const hideAlert = (message: string) => ({
  type: AT.HIDE_ALERT,
  payload: message,
})
