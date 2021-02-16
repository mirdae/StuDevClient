import { api } from './common'

type Post = {
  title: string
  content: string
  topic_category: string
  on_off_category: string
  participant_count_limit: number
}

const createPost = async (postInfo: Post) => {
  const { data } = await api.post('/post', postInfo)
  return data
}

export default {
  createPost,
}
