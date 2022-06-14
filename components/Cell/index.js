// components/Cell/index.js
import link from '../../behaviors/link'
const {MyComponent} = require('~/utils/component')

MyComponent({
  classes: [
    'title-class',
    'label-class',
    'value-class',
    'right-icon-class',
    'hover-class',
  ],
  mixins: [link],
  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true,
    },
    titleStyle: String,
  },
  methods: {
    onClick(event) {
      this.$emit('click', event.detail)
      this.jumpLink()
    }
  },
})
