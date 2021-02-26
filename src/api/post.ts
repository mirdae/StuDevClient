import { api } from './common'

type Post = {
  title: string
  content: string
  topic_category: string
  on_off_category: string
  participant_count_limit: number
}

type ParticipateInfo = {
  user_id: number
  post_id: number
}

type Comment = {
  comment: string
  post_id: number
}

const getAllPosts = async () => {
  const { data } = await api.get('/post')
  return data
}

const createPost = async (postInfo: Post) => {
  const { data } = await api.post('/post', postInfo)
  return data
}

const getPostDetail = async (postId: number) => {
  const { data } = await api.get(`/post/${postId}`)
  return data
}

const participateApply = async (postId: number) => {
  const { data } = await api.get(`/post/${postId}/participate`)
  return data
}

const participateCancel = async (postId: number) => {
  const { data } = await api.delete(`/post/${postId}/participate`)
  return data
}

const createComment = async (commentInfo: Comment) => {
  const { data } = await api.post(`/post/${commentInfo.post_id}/comment`, {
    comment: commentInfo.comment,
  })
  return data
}
export default {
  createPost,
  getAllPosts,
  getPostDetail,
  participateApply,
  participateCancel,
  createComment,
}
