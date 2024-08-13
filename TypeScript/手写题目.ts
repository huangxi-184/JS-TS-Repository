function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  const innerDebounceFunc = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    let context = this

    if (timeout) {
      clearTimeout(timeout)
    }

    if (immediate) {
      let callNow = !timeout

      timeout = setTimeout(() => {
        timeout = null
      }, wait)

      if (callNow) {
        func.apply(context, args)
      }
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }

  return innerDebounceFunc
}

function test() {
  console.log("test")
}

debounce(test, 1000, false)
