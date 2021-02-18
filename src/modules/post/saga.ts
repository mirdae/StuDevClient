import { takeLatest, call, put } from 'redux-saga/effects'
import AT from './actionTypes'
import { CreatePostAction, PostAction } from './types'
import API from '../../api'

function* createPostSaga({ payload }: CreatePostAction) {
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

function* getAllPostsSaga({ payload }: PostAction) {
  try {
    const { posts } = yield call(API.Post.getAllPosts)
    yield put({
      type: AT.REQUEST_GET_ALL_POSTS_SUCCESS,
      payload: posts,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_GET_ALL_POSTS_ERROR,
      payload: error,
      error: true,
    })
  }
}
export function* postSaga() {
  yield takeLatest(AT.REQUEST_CREATE_POST, createPostSaga)
  yield takeLatest(AT.REQUEST_GET_ALL_POSTS, getAllPostsSaga)
}
