import Axios from 'axios'

const devURL = 'http://localhost'
const prodURL = ''
const PORT = 3000

const baseURL = process.env.NODE_ENV === 'production' ? prodURL : devURL
const apiURL = `${baseURL}:${PORT}/api`

export const api = Axios.create({
  baseURL: apiURL,
  headers: { 'Content-Type': 'application/json' },
})
