import {isFunc} from '~/utils/type'
import {errorMsg} from '~/utils/error'

let timeout = null

export default function debounce(fn, delay = 500, immediate = false) {
  if (!isFunc(fn)) {
    errorMsg(`debounce function first argument must be a function, not ${typeof fn}`)
  }

  // 清除定时器
  if (timeout !== null) clearTimeout(timeout)
  if (immediate) {
    const callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, delay)
    if (callNow) isFunc(fn) && fn()
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时delay毫秒后执行fu回调方法
    timeout = setTimeout(() => {
      isFunc(fn) && fn()
    }, delay)
  }
}