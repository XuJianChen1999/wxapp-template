// components/Transition/transition.js
import {MyComponent}from '~/utils/component'
import transition from '~/behaviors/transition'

MyComponent({
  classes: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class',
  ],
  mixins: [transition(true)],
})