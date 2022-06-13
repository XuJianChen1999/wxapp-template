import {errCodes, errCodeMap} from '~/utils/constant'
import {getNetworkType} from '~/utils/system'
import {getToken} from '~/utils/local'
import {isObject} from '~/utils/type'

export default function request(options) {
  return new Promise((resolve, reject) => {
    const networkRes = await getNetworkType()
    if (networkRes.networkType === 'none') {
      wx.showToast({
        title: '无网络！',
        icon: 'none'
      })
      reject(networkRes)
      return
    }

    const token = getToken()
    if (!token) {
      wx.showToast({
        title: '暂未登录',
        icon: 'none'
      })
      return
    }

    const {
      url,
      method = 'GET',         
      title = '加载中...',      // loading文字
      failText = '请求数据失败', // 请求失败描述
      errTip = 'toast',        // 错误提示，是Toast还说Modal
      data = {}, 
      header = {},
      mask = false,            // 是否开启mask
      loading = true,          // 是否loading
      timeout = 8000,          // 超时时间
      hideLoadingTime = 500    // 多少毫秒隐藏loading
    } = options
    const tHeader = {'Auth ': token, ...header}

    loading && wx.showLoading({title, mask})
    wx.request({
      url,
      data,
      method,
      timeout,
      header: tHeader,
      success(res) {
        if (!isObject(res.data)) {
          wx.showToast({
            title: '服务端异常',
            icon: 'error'
          })
          return
        }
        // 针对错误码进行处理
        const {statusCode, data = {}} = res
        if (errCodes.includes(statusCode)) {
          wx.showToast({
            title: data.msg || errCodeMap[statusCode],
            icon: 'error'
          })
          return Promise.reject(res)
        }
        // 这里具体根据后端返回的数据
        if (!data.flag) {
          errTip === 'toast' && wx.showToast({title: data.message})
          errTip === 'modal' && wx.showModal({
            showCancel: false,
            content: data.message 
          })
        }
        
        resolve(data)
      },
      fail(err) {
        wx.showToast({
          title: failText,
          icon: 'error'
        })
        reject(err)
      },
      complete() {
        const timer = setTimeout(() => {
          clearTimeout(timer)
          wx.hideLoading()
        }, hideLoadingTime)
        options.finishCb && options.finishCb()
      }
    })
  })
} 