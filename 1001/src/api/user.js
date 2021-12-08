import request from '@/lib/request'
import { LOGIN_SERVER_URL } from './index'

// 登录
export function userLogin(data) {
  return request({
    url: LOGIN_SERVER_URL,
    method: 'post',
    data,
  })
}
