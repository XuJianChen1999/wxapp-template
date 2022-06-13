import {isFunc} from '~/utils/type'

let timer
let flag

export default function throttle(fn, delay = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true
      // 如果是立即执行，则在wait毫秒内开始时执行
      isFunc(fn) && fn()
      timer = setTimeout(() => {
        flag = false
      }, delay)
    }
  } else if (!flag) {
    flag = true
    // 如果是非立即执行，则在wait毫秒内的结束处执行
    timer = setTimeout(() => {
      flag = false
      isFunc(fn) && fn()
    }, delay)
  }
}