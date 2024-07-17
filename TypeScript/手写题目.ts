// 防抖函数
function debounce(func: Function, wait: number, immediate: boolean = false) {
  let timeout: number | null = null

  const innerDebounceFunc = function () {
    let context = this
    let args = arguments

    if (timeout) {
      clearTimeout(timeout)
    }

    if (immediate) {
      let callnow = !timeout

      timeout = setTimeout(function () {
        timeout = null
      }, wait)

      if (callnow) {
        func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      })
    }
  }

  return innerDebounceFunc
}

function test() {
  console.log("test")
}

debounce(test, 1000, false)
