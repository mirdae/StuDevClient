import { api } from './common'

type User = {
  socialId: string
  password: string
  nickname?: string
  email?: string
}

const auth = async () => {
  const { data } = await api.get('/user/auth')
  return data
}

const duplicateIdCheck = async (id: string) => {
  const { data } = await api.post('/user/check/id', { id })
  return data
}

const duplicateNicknameCheck = async (nickname: string) => {
  const { data } = await api.post('/user/check/nickname', { nickname })
  return data
}

const signIn = async (userInfo: User) => {
  const { data } = await api.post('/user/signin', userInfo)
  return data
}

const signUp = async (userInfo: User) => {
  const { data } = await api.post('/user', userInfo)
  return data
}

const logout = async () => {
  const { data } = await api.delete('/user')
  return data
}

export default {
  auth,
  signUp,
  signIn,
  logout,
  duplicateIdCheck,
  duplicateNicknameCheck,
}
