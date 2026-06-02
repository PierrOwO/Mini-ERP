import axios from 'axios'

export function getCsrfCookie() {
  return axios.get('/sanctum/csrf-cookie')
}
