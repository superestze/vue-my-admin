import { createI18n } from 'vue-i18n'
import zhLocal from './lang/zh'
import enLocal from './lang/en'
import store from '@/store'
const messages = {
  en: {
    msg: {
      ...enLocal
    }
  },
  zh: {
    msg: {
      ...zhLocal
    }
  }
}

function getLanguage() {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
