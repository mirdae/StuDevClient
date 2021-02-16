import AT from './actionTypes'

export const requestCreatePost = (postInfo: any) => ({
  type: AT.REQUEST_CREATE_POST,
  payload: postInfo,
})
