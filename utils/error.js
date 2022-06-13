import {isString} from './type'

function error(text) {
  throw new Error(text)
}

export function errorMsg(message) {
  if (!isString(message)) error('参数不是一个字符串')
  throw new Error(message)
}

export function argError(type, value) {
  if (!value) return
  throw new Error(`params must be ${type}, not of a ${typeof value}`)
}

