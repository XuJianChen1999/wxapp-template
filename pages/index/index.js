// index.js
import {formatTime} from '~/function/date'
import {getToken} from '~/utils/local'

// 获取应用实例
const app = getApp()

console.log(formatTime)
console.log(getToken())

Page({
  data: {
    motto: 'Hello World',
    show: false
  },
  async onLoad() {
    
  },
  showPopup() {
    this.setData({
      show: true
    })
  }
})
