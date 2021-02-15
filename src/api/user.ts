import { api } from './common'

type User = {
  socialId: string
  password: string
  nickname?: string
  email?: string
}

const signUp = async (userInfo: User) => {
  const { data } = await api.post('/user', userInfo)
  return data
}

const signIn = async (userInfo: User) => {
  const { data } = await api.post('/user/signin', userInfo)
  return data
}

export default {
  signUp,
  signIn,
}
