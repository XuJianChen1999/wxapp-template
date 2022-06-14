// components/Tab/index.js
Component({
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
    current: {
      type: Number,
      default: 0
    },
    background: {
      type: String,
      value: '#f8f8f8'
    }
  },
  data: {
    width: 0,
    transform: `translate3d(0rpx, 0, 0)`
  },
  pageLifetimes: {
    show() {
      const that = this
      this.setData({
        width: that.properties.tabs.length * 120,
      })
    }
  },
  observers: {
    current(newVal) {
      this.setData({
        transform: 120 * newVal
      })
    }
  },
  methods: {
    selectItem(e) {
      this.triggerEvent('onSelectItem', e.currentTarget.dataset.index)
    }
  }
})
