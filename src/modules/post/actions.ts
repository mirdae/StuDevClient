import AT from './actionTypes'
import { PostStateArr } from './types'

export const requestCreatePost = (postInfo: any) => ({
  type: AT.REQUEST_CREATE_POST,
  payload: postInfo,
})

export const changePostTitle = (postInfo: string) => ({
  type: AT.CHANGE_POST_TITLE,
  payload: postInfo,
})
export const changePostContent = (postInfo: string) => ({
  type: AT.CHANGE_POST_CONTENT,
  payload: postInfo,
})
export const changePostTopic = (postInfo: string) => ({
  type: AT.CHANGE_POST_TOPIC,
  payload: postInfo,
})
export const changePostOnOff = (postInfo: string) => ({
  type: AT.CHANGE_POST_ON_OFF,
  payload: postInfo,
})
export const changePostParticipantCountLimit = (postInfo: number) => ({
  type: AT.CHANGE_POST_PARTICIPANT_COUNT_LIMIT,
  payload: postInfo,
})

export const requestGetAllPosts = () => ({
  type: AT.REQUEST_GET_ALL_POSTS,
  payload: [],
})
