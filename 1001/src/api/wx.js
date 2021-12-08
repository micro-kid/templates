import request from '@/lib/request'
import { WX_MP_CONFIG_SERVER_URL } from './index'

// 微信ticket
export function getWxTicket(data) {
  return request({
    url: WX_MP_CONFIG_SERVER_URL,
    method: 'post',
    data,
  })
}
