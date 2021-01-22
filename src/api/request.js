import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3300',
  // baseURL: 'https://musicapi.adicw.cn/',
  timeout: 5000
})

//请求拦截
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//响应拦截
http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
