import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

/**
 * @description: 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 1. 用户已经登录， 则不允许进入login
  // 2. 用户未登录， 只允许进入
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在
      // 如果不存在， 则获取用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
