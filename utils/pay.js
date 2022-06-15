import {isObject} from './type'
import {argError, errorMsg} from './error'
import {OPEN_ID} from './constant'
import {getItem} from './local'
import request from '~/service/request'

// 微信支付
export function wxPay(data) {
  if (!data) errorMsg('you have to pass payment params, and is an object type')
  if (!isObject(data)) {
    showToast('后端支付校验异常', 'error')
    argError('object', data)
  }

  return new Promise((resolve, reject) => {
    const {nonceStr, paySign, timeStamp, signType} = data
    wx.requestPayment({
      paySign,
      nonceStr,
      timeStamp,
      package: data.package,
      signType: signType || 'MD5',
      success(res) {
        resolve(res)
        showToast('支付成功', 'success')
      },
      fail(err) {
        console.log('支付成功: ', err)
        reject(err)
        const errMap = {
          'requestPayment:fail cancel': '支付已取消',
          'requestPayment:fail fail': '支付失败'
        }
        showToast(errMap[err.errMsg], 'error')
      }
    })
  })
}

// api接口支付
export function httpPay(options) {
  return new Promise(async (resolve, reject) => {
    const {url, method = 'POST', params} = options
    if (!params) errorMsg('you have to pass payment params, and is an object type')
    if (!isObject(params)) argError('object', params)

    const {code, message, data = null} = await request({
      url,
      method,
      data: {
        // 一般支付都会传递openId，根据个人接口情况
        openId: getItem(OPEN_ID),
        ...params
      },
      title: '支付中',
      mask: true
    })

    // 这里具体根据后端返回为主
    if (code !== 20000) {
      reject({code, message, data})
      showToast(message, 'error')
      return
    }
    if (code === 20000 && data !== null) {
      resolve(data)
      wxPay(data)
    }
  })
}

function showToast(title, icon) {
  wx.showToast({title,  icon})
}