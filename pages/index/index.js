// index.js
import {formatTime} from '~/function/date'
import {getToken} from '~/utils/local'
import popup from '../../behaviors/popup'

console.log(formatTime)
console.log(getToken())

Page({
  behaviors: [popup],
  data: {
    // popupVisible: false,
    showCalendar: false,
    current: 0
  },
  async onLoad() {
    
  },
  showPopup() {
    // this.setPopupVisible()
    this.setData({
      popupVisible: true
    })
  },
  clickOverlay() {
    
  },
  clickCalendar() {
    this.setData({
      showCalendar: true
    })
  },
  onConfirm(e) {
    console.log(e)
    console.log(formatTime(e.detail[0]))
  },
  onSelectItem(e) {
    this.setData({
      current: e.detail
    })
  }
})
