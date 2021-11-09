import SvgIcon from '@/components/SvgIcon/index'

/*
 * @description  : 导入所有svg
 */

const svgRequire = require.context('./svg', false, /\.svg$/)
// 返回require 函数
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
