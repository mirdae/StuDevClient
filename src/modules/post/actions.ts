import AT from './actionTypes'
import { PostState, PostStateArr, PostDetailState, CommentState } from './types'

//requestCreatePost
export const requestCreatePost = (postInfo: any) => ({
  type: AT.REQUEST_CREATE_POST,
  payload: postInfo,
})
export const requestCreatePostSuccess = (postInfo: any) => ({
  type: AT.REQUEST_CREATE_POST_SUCCESS,
  payload: postInfo,
})
export const requestCreatePostError = (postInfo: any) => ({
  type: AT.REQUEST_CREATE_POST_ERROR,
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

//requestGetAllPosts
export const requestGetAllPosts = () => ({
  type: AT.REQUEST_GET_ALL_POSTS,
  payload: [],
})
export const requestGetAllPostsSuccess = () => ({
  type: AT.REQUEST_GET_ALL_POSTS_SUCCESS,
  payload: [],
})
export const requestGetAllPostsError = () => ({
  type: AT.REQUEST_GET_ALL_POSTS_ERROR,
  payload: [],
})

//requestGetPostDetail
export const requestGetPostDetail = (postId: number) => ({
  type: AT.REQUEST_GET_POST_DETAIL,
  payload: postId,
})

export const requestGetPostDetailSuccess = (post: PostDetailState) => ({
  type: AT.REQUEST_GET_POST_DETAIL_SUCCESS,
  payload: post,
})

export const requestGetPostDetailError = (post: PostDetailState) => ({
  type: AT.REQUEST_GET_POST_DETAIL_ERROR,
  payload: post,
})

//requestParticipateApply
export const requestParticipateApply = (postId: number) => ({
  type: AT.REQUEST_PARTICIPATE_APPLY,
  payload: postId,
})

export const requestParticipateApplySuccess = (post: PostDetailState) => ({
  type: AT.REQUEST_PARTICIPATE_APPLY_SUCCESS,
  payload: post,
})

export const requestParticipateApplyError = (post: PostDetailState) => ({
  type: AT.REQUEST_PARTICIPATE_APPLY_ERROR,
  payload: post,
})

//requestParticipateApply
export const requestParticipateCancel = (postId: number) => ({
  type: AT.REQUEST_PARTICIPATE_CANCEL,
  payload: postId,
})

export const requestParticipateCancelSuccess = (post: PostDetailState) => ({
  type: AT.REQUEST_PARTICIPATE_CANCEL_SUCCESS,
  payload: post,
})

export const requestParticipateCancelError = (post: PostDetailState) => ({
  type: AT.REQUEST_PARTICIPATE_CANCEL_ERROR,
  payload: post,
})

//requestCreateComment
export const requestCreateComment = (commentInfo: CommentState) => ({
  type: AT.REQUEST_CREATE_COMMENT,
  payload: commentInfo,
})

export const requestCreateCommentSuccess = (commentInfo: CommentState) => ({
  type: AT.REQUEST_CREATE_COMMENT_SUCCESS,
  payload: commentInfo,
})

export const requestCreateCommentError = (commentInfo: CommentState) => ({
  type: AT.REQUEST_CREATE_COMMENT_ERROR,
  payload: commentInfo,
})
