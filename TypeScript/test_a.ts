// 创建一个代理对象，拦截对 Math 的操作
const mathProxy = new Proxy(Math, {
  get(target, prop) {
    if (prop === "PI") {
      return 5 // 修改 Math.PI 的值为 5
    }
    return Reflect.get(target, prop) // 其他属性正常返回
  },
})

// 使用代理对象
console.log(mathProxy.PI) // 输出 5
console.log(mathProxy.sqrt(16)) // 输出 4

// 验证原始 Math 对象未受影响
console.log(Math.PI) // 输出 3.141592653589793
