const {animationFrame} = require('../utils/utils.js')
const {isObject} = require('../utils/type')

const getClassNames = name => ({
  enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
  leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`,
})

module.exports = function transition(showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow',
      },
      duration: {
        type: null,
        value: 300,
        observer: 'observeDuration',
      },
      name: {
        type: String,
        value: 'fade',
      },
    },
    data: {
      type: '',
      inited: false,
      display: false,
    },
    ready() {
      if (this.data.show === true) {
        this.observeShow(true, false);
      }
    },
    methods: {
      observeShow(value, old) {
        if (value === old) return
        value ? this.enter() : this.leave()
      },
      enter() {
        const {duration, name} = this.data
        const classNames = getClassNames(name)
        const currentDuration = isObject(duration) ? duration.enter : duration
        this.status = 'enter'
        this.$emit('before-enter')
        animationFrame(() => {
          if (this.status !== 'enter') return
          this.$emit('enter')
          this.setData({
            inited: true,
            display: true,
            classes: classNames.enter,
            currentDuration,
          })
          animationFrame(() => {
            if (this.status !== 'enter') return
            this.transitionEnded = false
            this.setData({classes: classNames['enter-to']})
          })
        })
      },
      leave() {
        if (!this.data.display) return
        const {duration, name} = this.data
        const classNames = getClassNames(name)
        const currentDuration = isObject(duration) ? duration.leave : duration
        this.status = 'leave'
        this.$emit('before-leave')
        animationFrame(() => {
          if (this.status !== 'leave') return
          this.$emit('leave')
          this.setData({
            classes: classNames.leave,
            currentDuration,
          })
          animationFrame(() => {
            if (this.status !== 'leave') return
            this.transitionEnded = false
            setTimeout(() => this.onTransitionEnd(), currentDuration)
            this.setData({classes: classNames['leave-to']})
          })
        })
      },
      onTransitionEnd() {
        if (this.transitionEnded) return
        this.transitionEnded = true;
        this.$emit(`after-${this.status}`)
        const {show, display} = this.data
        if (!show && display) {
          this.setData({ display: false })
        }
      }
    }
  })
}