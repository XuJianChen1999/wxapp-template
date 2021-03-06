import basic from '~/behaviors/basic'

function mapKeys(source, target, map) {
  Object.keys(map).forEach((key) => {
    if (source[key]) {
      target[map[key]] = source[key]
    }
  })
}
export function MyComponent(myOptions) {
  const options = {}
  mapKeys(myOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    destroyed: 'detached',
    classes: 'externalClasses',
  })
  // 添加默认指定样式
  options.externalClasses = options.externalClasses || []
  options.externalClasses.push('custom-class')
  // 添加默认behaviors
  options.behaviors = options.behaviors || []
  options.behaviors.push(basic)
  // 添加relations
  const {relation} = myOptions
  if (relation) {
    options.relations = relation.relations
    options.behaviors.push(relation.mixin)
  }
  // 映射behavior
  if (myOptions.field) {
    options.behaviors.push('wx://form-field')
  }
  // 添加默认options
  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
  }
  Component(options)
}

function canIUseNextTick() {
  return wx.canIUse('nextTick');
}

export function nextTick(cb) {
  if (canIUseNextTick()) {
    wx.nextTick(cb)
  } else {
    setTimeout(() => {
      cb();
    }, 1000 / 30)
  }
}

exports.MyComponent = MyComponent
