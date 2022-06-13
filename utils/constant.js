const baseName = 'WXAPP_TEMPLATE'

// 缓存常量
export const TOKEN = `${baseName}_TOKEN`
export const USER = `${baseName}_USER`
export const OPEN_ID = `${baseName}_OPEN_ID`

// http url常量
export const DEV_URL = 'https://www.testurl.com'
export const PROD_URL = 'https://www.produrl.com'

// http错误常量
export const errCodes = [500, 502, 503, 504, 403, 404, 400, 401]
export const errCodeMap = {
  400: '请求错误',
  401: '登录状态失效，请重新登录',
  403: '拒绝访问',
  404: '请求地址不存在',
  500: '服务器繁忙',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
}