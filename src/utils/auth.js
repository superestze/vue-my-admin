import { getItem, setItem } from '@/utils/storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '../constant'

/**
 * @description: 获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * @description: 设置时间戳
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

/**
 * @description: 是否超时
 */
export function isCheckTimeout() {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  console.log(
    '%c 🍖 currentTime - timeStamp : ',
    'font-size:20px;background-color: #F5CE50;color:#fff;',
    currentTime - timeStamp
  )
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
