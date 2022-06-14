// components/Navbar/index.js
import {MyComponent} from '~/utils/component'
import {getRect} from '~/utils/system'

MyComponent({
  classes: ['title-class'],
  props: {
    title: String,
    fixed: {
      type: Boolean,
      observer: 'setHeight',
    },
    placeholder: {
      type: Boolean,
      observer: 'setHeight',
    },
    leftText: String,
    rightText: String,
    customStyle: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: Number,
      value: 1,
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: true,
    },
  },
  data: {
      height: 46,
  },
  async created() {
    const {statusBarHeight} = wx.getSystemInfoSync()
    this.setData({
      statusBarHeight,
      height: 46 + statusBarHeight,
    })
  },
  mounted() {
    this.setHeight()
  },
  methods: {
    onClickLeft() {
      this.$emit('click-left')
    },
    onClickRight() {
      this.$emit('click-right')
    },
    setHeight() {
      if (!this.data.fixed || !this.data.placeholder) return
      wx.nextTick(() => {
        getRect(this, '.van-nav-bar').then((res) => {
          if (res && 'height' in res) {
            this.setData({height: res.height})
          }
        })
      })
    },
  },
})