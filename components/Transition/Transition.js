// components/Transition/transition.js
const {MyComponent} = require('../../utils/component')
const transition = require('../../behaviors/transition')


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