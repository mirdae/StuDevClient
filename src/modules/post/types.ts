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

export type PostDetailAction =
  | ReturnType<typeof actions.requestGetPostDetail>
  | ReturnType<typeof actions.requestParticipateApply>
  | ReturnType<typeof actions.requestParticipateCancel>

export type PostDetailActionResult =
  | ReturnType<typeof actions.requestGetPostDetailSuccess>
  | ReturnType<typeof actions.requestGetPostDetailError>
  | ReturnType<typeof actions.requestParticipateApplySuccess>
  | ReturnType<typeof actions.requestParticipateApplyError>
  | ReturnType<typeof actions.requestParticipateCancelSuccess>
  | ReturnType<typeof actions.requestParticipateCancelError>
  | ReturnType<typeof actions.requestCreateComment>
  | ReturnType<typeof actions.requestCreateCommentSuccess>
  | ReturnType<typeof actions.requestCreateCommentError>

export type PostState = {
  id?: number
  title: string
  content: string
  topic_category: string
  on_off_category: string
  participant_count_limit: number
  participant_count?: number
  created_at?: string
  isCreated?: 'fail' | 'success'
  views: number
  updated_at?: string
}

export type PostDetailState = {
  id?: number
  title: string
  content: string
  topic_category: string
  on_off_category: string
  participant_count_limit: number
  participant_count: number
  created_at: string
  updated_at?: string
  views: number
  comment: []
  isCreated?: 'fail' | 'success'
  participant: string[]
}

export type PostStateArr = {
  posts: PostState[]
}

export type CommentState = {
  id?: number
  comment: string
  created_at?: string
  post_id: number
  user_id?: number
  nickname?: string
}
