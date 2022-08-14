
// 防抖
// 事件持续触发，当事件在间隔时间内 不在触发 在去执行，每次执行最新的方法
export function d(fn, wait= 100, immediate = false ) {
  let timer = null
  let immediateFlag = false
  return (...args) => {
    if (timer){
      clearTimeout(timer)
      timer = null
    } 
    // 立即执行
    if (immediate && !immediateFlag) {
      fn.call(this, ...args)
      immediateFlag = true
    }
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}

// 节流
// 事件持续触发 间隔一段时间 触发一次
export function t(fn, wait ) {
  let lastTime = 0
  console.log('=====', lastTime)
  return (...args) => {
    let t = new Date().getTime()
    if (t - lastTime > wait) {
      fn.call(this, ...args)
      lastTime = t
    }
  }
}
let a = d(() => {
  console.log(new Date().getTime())
}, 500)
setInterval(() => {
  a()
}, 100)