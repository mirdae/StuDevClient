import { takeLatest, call, put } from 'redux-saga/effects'
import AT from './actionTypes'
import { PostAction } from './types'
import API from '../../api'

function* createPostSaga({ payload }: any) {
  try {
    const data = yield call(API.Post.createPost, payload)
    console.log(data)
    yield put({
      type: AT.REQUEST_CREATE_POST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_CREATE_POST_ERROR,
      payload: error,
      error: true,
    })
  }
}

export function* postSaga() {
  yield takeLatest(AT.REQUEST_CREATE_POST, createPostSaga)
}
