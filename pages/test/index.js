// pages/test/index.js
import {setItem, getItem} from '~/utils/local'

Page({
  data: {

  },
  onLoad() {
    setItem('a', '1234567890123')
    console.log(getItem('a'))
  }
})