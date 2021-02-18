import { api } from './common'

type Post = {
  title: string
  content: string
  topic_category: string
  on_off_category: string
  participant_count_limit: number
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
export default {
  createPost,
  getAllPosts,
  getPostDetail,
}
