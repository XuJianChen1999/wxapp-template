import {isArray, isObject, isString} from './type'
import {errorMsg, argError} from './error'
import {TOKEN, USER} from './constant'

// 统一性
export const setItem = (key, value) => {
  if (!key) errorMsg('Storage key is required')
  if (!isString(key)) argError('string', key)

  if (isArray(value) || isObject(value)) {
    value = JSON.stringify(value)
  }

  return wx.setStorageSync(key, value)
}
export const getItem = key => {
  if (!key) errorMsg('Storage key is required')
  if (!isString(key)) argError('string', key)

  let data = wx.getStorageSync(key)
  try {
    const jsonData = JSON.parse(data)
    
    if (isArray(jsonData) || isObject(jsonData)) return jsonData
    else return data
  } catch (error) {
    return data || null
  }
}

// remove
export const removeItem = key => wx.removeStorageSync(key)
export const removeAll = () => wx.clearStorageSync()

// token
export const setToken = value => setItem(TOKEN, value)
export const getToken = () => getItem(TOKEN) || ''

// user（这里set的时候应该做一个判断，value必须是Object，懒得写了）
export const setUser = value => setItem(USER, value)
export const getUser = () => getItem(USER) || {}
