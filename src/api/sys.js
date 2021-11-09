import request from '@/utils/request'

/*
 * @description  : 登录
 * return promise
 */

export const login = (data) => {
  return request({
    url: 'sys/login',
    method: 'POST',
    data
  })
}

export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}
