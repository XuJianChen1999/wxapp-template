// index.js
import {formatTime} from '~/function/date'
import {getToken} from '~/utils/local'

// 获取应用实例
const app = getApp()

console.log(formatTime)
console.log(getToken())

Page({
  data: {
    show: false,
    showCalendar: false,
    current: 0
  },
  async onLoad() {
    
  },
  showPopup() {
    this.setData({
      show: true
    })
  },
  clickCalendar() {
    this.setData({
      showCalendar: true
    })
  },
  onConfirm(e) {
    console.log(e)
  },
  onSelectItem(e) {
    this.setData({
      current: e.detail
    })
  }
})
