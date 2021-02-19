import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import AT from './actionTypes'
import API from '../../api'

function* signUpSaga({ payload }: any) {
  try {
    const data = yield call(API.User.signUp, payload)
    yield put({
      type: AT.REQUEST_SIGN_UP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_SIGN_UP_ERROR,
      payload: error,
      error: true,
    })
  }
}

function* signInSaga({ payload }: any) {
  try {
    const data = yield call(API.User.signIn, payload)
    yield put({
      type: AT.REQUEST_SIGN_IN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_SIGN_IN_ERROR,
      payload: error,
      error: true,
    })
  }
}

function* duplicateIdCheckSaga({ payload }: any) {
  try {
    const data = yield call(API.User.duplicateIdCheck, payload)
    yield put({
      type: AT.REQUEST_DUPLICATE_ID_CHECK_SUCCESS,
      payload: data.duplicate,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_DUPLICATE_ID_CHECK_ERROR,
      payload: error,
      error: true,
    })
  }
}

export function* userSaga() {
  yield takeLatest(AT.REQUEST_SIGN_UP, signUpSaga)
  yield takeLatest(AT.REQUEST_SIGN_IN, signInSaga)
  yield takeEvery(AT.REQUEST_DUPLICATE_ID_CHECK, duplicateIdCheckSaga)
}
