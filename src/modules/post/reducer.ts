import {
  CreatePostAction,
  PostAction,
  PostDetailAction,
  PostState,
  PostStateArr,
  PostDetailActionResult,
  PostDetailState,
} from './types'
import AT from './actionTypes'
import { Participant } from '../../containers/Options/OptionsStyle'

const initialCreatPostState: PostState = {
  title: '',
  content: '',
  topic_category: '',
  on_off_category: '',
  participant_count_limit: 0,
  views: 0,
  isCreated: 'fail',
}

export function createPostReducer(
  state: PostState = initialCreatPostState,
  action: CreatePostAction
): PostState {
  switch (action.type) {
    case AT.REQUEST_CREATE_POST_SUCCESS:
      return { ...state, isCreated: action.payload }
    case AT.REQUEST_CREATE_POST_ERROR:
      return { ...state }
    case AT.CHANGE_POST_TITLE:
      return { ...state, title: action.payload }
    case AT.CHANGE_POST_CONTENT:
      return { ...state, content: action.payload }
    case AT.CHANGE_POST_TOPIC:
      return { ...state, topic_category: action.payload }
    case AT.CHANGE_POST_ON_OFF:
      return { ...state, on_off_category: action.payload }
    case AT.CHANGE_POST_PARTICIPANT_COUNT_LIMIT:
      return { ...state, participant_count_limit: action.payload }
    default:
      return { ...state }
  }
}

const initialPostState: PostStateArr = {
  posts: [
    {
      title: '',
      content: '',
      topic_category: '',
      on_off_category: '',
      participant_count_limit: 0,
      participant_count: 0,
      created_at: '',
      updated_at: '',
      views: 0,
    },
  ],
}

export function postReducer(
  state: PostStateArr = initialPostState,
  action: PostAction
): PostStateArr {
  switch (action.type) {
    case AT.REQUEST_GET_ALL_POSTS_SUCCESS:
      return { posts: [...action.payload] }
    case AT.REQUEST_GET_ALL_POSTS_ERROR:
      return { ...state }
    default:
      return state
  }
}

const initialDetailPostState: any = {
  title: '',
  content: '',
  topic_category: '',
  on_off_category: '',
  participant_count_limit: 0,
  participant_count: 0,
  created_at: '',
  updated_at: '',
  views: 0,
  comment: [],
  participant: [],
}

export function postDetailReducer(
  state: any = initialDetailPostState,
  action: PostDetailActionResult
): PostDetailState {
  switch (action.type) {
    case AT.REQUEST_GET_POST_DETAIL_SUCCESS:
      return {
        ...action.payload,
        created_at: action.payload.created_at?.split('T')[0],
      }
    case AT.REQUEST_GET_POST_DETAIL_ERROR:
      return { ...state }
    case AT.REQUEST_PARTICIPATE_APPLY_SUCCESS:
      return {
        ...state,
        participant: [...state.participant, action.payload.user_id.toString()],
        participant_count: state.participant_count + 1,
      }
    case AT.REQUEST_PARTICIPATE_APPLY_ERROR:
      return { ...state }
    case AT.REQUEST_PARTICIPATE_CANCEL_SUCCESS:
      state.participant.splice(state.participant_count - 1, 1)
      return {
        ...state,
        participant: state.participant,
        participant_count: state.participant_count - 1,
      }
    case AT.REQUEST_PARTICIPATE_CANCEL_ERROR:
      return { ...state }
    case AT.REQUEST_CREATE_COMMENT_SUCCESS:
      console.log([...state.comment, action.payload])
      return {
        ...state,
      }
    case AT.REQUEST_CREATE_COMMENT_ERROR:
      return { ...state }
    default:
      return state
  }
}
