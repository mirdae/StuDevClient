import { PostAction, PostState } from './types'
import AT from './actionTypes'

const initialState: PostState = {
  title: '',
  content: '',
  topic_category: '',
  on_off_category: '',
  participant_count_limit: 0,
  participant_count: 0,
  created_at: '',
  updated_at: '',
  views: 0,
}

export function postReducer(
  state: PostState = initialState,
  action: PostAction
): PostState {
  switch (action.type) {
    case AT.REQUEST_CREATE_POST_SUCCESS:
      return { ...state }
    case AT.REQUEST_CREATE_POST_ERROR:
      return { ...state }

    default:
      return { ...state }
  }
}
