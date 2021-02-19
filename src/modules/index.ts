import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import { userReducer } from './user/reducer'
import { userSaga, userDuplicateReducer } from './user'
import {
  postReducer,
  createPostReducer,
  postDetailReducer,
  postSaga,
} from './post'

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  createPostReducer,
  postDetailReducer,
  userDuplicateReducer,
})

export function* rootSaga() {
  yield all([userSaga(), postSaga()])
}

export default rootReducer

export type RootState =
  | ReturnType<typeof userReducer>
  | ReturnType<typeof postReducer>
  | ReturnType<typeof createPostReducer>
  | ReturnType<typeof postDetailReducer>
  | ReturnType<typeof userDuplicateReducer>
