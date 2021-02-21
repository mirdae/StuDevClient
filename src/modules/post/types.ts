import * as actions from './actions'

export type CreatePostAction =
  | ReturnType<typeof actions.requestCreatePost>
  | ReturnType<typeof actions.changePostTitle>
  | ReturnType<typeof actions.changePostContent>
  | ReturnType<typeof actions.changePostOnOff>
  | ReturnType<typeof actions.changePostTopic>
  | ReturnType<typeof actions.changePostParticipantCountLimit>

export type PostAction =
  | ReturnType<typeof actions.requestGetAllPosts>
  | ReturnType<typeof actions.requestGetAllPostsSuccess>
  | ReturnType<typeof actions.requestGetAllPostsError>

export type PostDetailAction = ReturnType<typeof actions.requestGetPostDetail>

export type PostDetailActionResult =
  | ReturnType<typeof actions.requestGetPostDetailSuccess>
  | ReturnType<typeof actions.requestGetPostDetailError>

export type PostState = {
  id?: number
  title: string
  content: string
  topic_category: string
  on_off_category: string
  participant_count_limit: number
  participant_count?: number
  created_at?: string
  updated_at?: string
  views?: number
  comment?: []
  isCreated?: 'fail' | 'success'
  participant?: number[]
}

export type PostStateArr = {
  posts: PostState[]
}
