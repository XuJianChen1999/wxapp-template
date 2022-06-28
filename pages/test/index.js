// pages/test/index.js
import {setItem, getItem} from '~/utils/local'

//左右两边的高度
let leftHeight = 0, rightHeight = 0 
let leftNum = -1, rightNum = -1, count
let query

Page({
  data: {
    list: [{
      title: '1',
      url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5106.d1c51378.png',
    }, {
      title: '2',
      url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5102.332bb21d.png',
    },{
      title: '3',
      url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5109.c1a972f0.png',
    },{
      title: '未知',
      url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5803.c3f8aebf.png'
    }, {
      title: '6',
      url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5103.47e64f38.png',
    },{
      title: '8',
      url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/5104.401091c6.png',
    }],
    leftList: [],
    rightList: []
  },
  onLoad() {
    setItem('a', '1234567890123')
    this.renderData()
  },
  async renderData() {
    const {list, leftList, rightList} = this.data
    query = wx.createSelectorQuery()
    for (const item of list) {
      if (leftHeight <= rightHeight) {
        leftNum++
        count = 1
        leftList.push(item)
      } else {
        rightNum++
        count = 0
        rightList.push(item)
      }
      // leftHeight <= rightHeight ? leftNum++ : rightNum++
      // leftHeight <= rightHeight ? count = 1 : count = 0
      //判断两边高度，来觉得添加到那边
      // leftHeight <= rightHeight ? leftList.push(item) : rightList.push(item)
      await this.getWrapperHeight(leftList, rightList)
    }
  },
  // 获取左右两边高度
  getWrapperHeight(leftList, rightList) { 
    return new Promise(resolve => {
      this.setData({leftList, rightList}, () => {
        if (count === 1) {
          query.select('#left').boundingClientRect()
          query.exec(res => {
            leftHeight = res[0].height
            resolve()
          })
        } else {
          query.select('#right').boundingClientRect()
          query.exec(res => {
            rightHeight = res[0].height
            resolve()
          })
        }
      })
    })
  },
  // 加载图片错误
  loadError(e) {
    const {leftList, rightList} = this.data
    const {dataset} = e.currentTarget
    if (dataset.rightindex) {
      rightList[dataset.rightindex].height = 750
      rightList[dataset.rightindex].error = true
      // rightList[rightindex].url = '或者放一个加载失败的默认图片'
    } else {
      leftList[dataset.leftindex].height = 750
      leftList[dataset.leftindex].error = true
    }

    console.log(leftList)
    console.log(rightList)


    this.setData({leftList, rightList})
  }
})