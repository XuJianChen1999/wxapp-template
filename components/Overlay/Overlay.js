// components/Overlay/Overlay.js
import {MyComponent}from '~/utils/component'

MyComponent({
  props: {
    show: Boolean,
    customStyle: String,
    duration: {
      type: null,
      value: 300,
    },
    zIndex: {
      type: Number,
      value: 1,
    },
    lockScroll: {
      type: Boolean,
      value: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
    // for prevent touchmove
    noop() { },
  },
})