/*
 * @description  : request
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      // 请求成功， 业务失败
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  (error) => {
    ElMessage.error(error)
    return Promise.reject(error)
  }
)

export default service
