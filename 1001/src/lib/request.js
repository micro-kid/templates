import axios from 'axios'

const service = axios.create({
  // baseURL: "",
  withCredentials: true,
  timeout: 10000,
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    return Promise.resolve(res)
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
