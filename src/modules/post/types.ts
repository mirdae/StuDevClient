import * as actions from './actions'

export type PostAction =
  | ReturnType<typeof actions.requestCreatePost>
  | ReturnType<typeof actions.changePostTitle>
  | ReturnType<typeof actions.changePostContent>
  | ReturnType<typeof actions.changePostOnOff>
  | ReturnType<typeof actions.changePostTopic>
  | ReturnType<typeof actions.changePostParticipantCountLimit>

export type PostState = {
  title: string
  content: string
  topic_category: string
  on_off_category: string
  participant_count_limit: number
  participant_count: number
  created_at: string
  updated_at?: string
  views: number
}
