// index.js
import {formatTime} from '~/utils/util'
// 获取应用实例
const app = getApp()

console.log(formatTime)

Page({
  data: {
    motto: 'Hello World',
    show: false
  },
  showPopup() {
    this.setData({
      show: true
    })
  }
})
