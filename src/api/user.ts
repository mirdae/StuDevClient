import { api } from './common'

type User = {
  socialId: string
  password: string
  nickname?: string
  email?: string
}

const duplicateIdCheck = async (id: string) => {
  const { data } = await api.post('/user/check/id', { id })
  return data
}

const signIn = async (userInfo: User) => {
  const { data } = await api.post('/user/signin', userInfo)
  return data
}

const signUp = async (userInfo: User) => {
  //const { data } = await api.post('/user', userInfo)
  //return data
}

export default {
  signUp,
  signIn,
  duplicateIdCheck,
}
