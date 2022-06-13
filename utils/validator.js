exports.isFunction = function isFunction(val) {
  return typeof val === 'function'
}
exports.isPlainObject = function isPlainObject(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}
exports.isPromise = function isPromise(val) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch)
}
exports.isDef = function isDef(value) {
  return value !== undefined && value !== null
}
exports.isObj = function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}
exports.isNumber = function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value)
}
exports.isBoolean = function isBoolean(value) {
  return typeof value === 'boolean'
}
const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
exports.isImageUrl = function isImageUrl(url) {
  return IMAGE_REGEXP.test(url)
}
exports.isVideoUrl = function isVideoUrl(url) {
  return VIDEO_REGEXP.test(url)
}