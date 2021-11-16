const whiteList = ['/login', '/import', '/404', '401']
export function isTags(path) {
  return !whiteList.includes(path)
}
