import { createI18n } from 'vue-i18n'
import zhLocal from './lang/zh'
import enLocal from './lang/en'
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

const locale = 'zh'

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
