let systemInfo

const getSystemInfoSync = () => {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync()
  }
  return systemInfo
}

exports.animationFrame = function requestAnimationFrame(cb) {
  const system = getSystemInfoSync()

  if (system.platform === 'devtools') {
    return setTimeout(() => {
        cb()
    }, 1000 / 30)
  }
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
    cb()
  })
}