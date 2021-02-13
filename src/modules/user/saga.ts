import { takeLatest, call, put } from 'redux-saga/effects'
import AT from './actionTypes'
import { UserAction } from './types'

function* getUserInfo(payload: UserAction) {
  yield console.log(payload)
}

export function* userSaga() {
  yield takeLatest(AT.REQUEST_GET_USER_INFO, getUserInfo)
}
