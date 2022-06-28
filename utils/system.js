let systemInfo

export const getSystemInfoSync = () => {
  if (systemInfo === null) {
    systemInfo = wx.getSystemInfoSync()
  }

  console.log(systemInfo)
  return systemInfo
}

export function getRect(context, selector) {
  return new Promise(resolve => {
    wx.createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]))
  })
}

export function requestAnimationFrame(cb) {
  const system = wx.getSystemInfoSync()
  console.log(system)
  if (system.platform === 'devtools') {
    return setTimeout(() => {
      cb()
    }, 1000 / 30)
  }
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => cb())
}

export const getNetworkType = async () => {
  return await wx.getNetworkType()
}

export const getImageInfo = src => {
  return new Promise(resolve => {
    wx.getImageInfo({
      src,
      success(res) {
        const height = res.height * 750 / res.width
        resolve({ ...res,
          height,
          src
        })
      },
      fail(e) {
        console.error(e)
        resolve({
          type: 'error',
          height: 750,
          src
        })
      }
    })
  })
}