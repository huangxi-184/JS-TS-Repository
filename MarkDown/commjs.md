## CommonJs 导入导出

1. 导出模块.

   1. module.exports 和 exports 都可以导出模块.
   2. exports 只是 module.exports 的一个引用, 因此修改 exports 的属性值, 也会影响到 module.exports 的属性值.所以为了防止出错。最好只是用 module.exports.

```js
module.exports = {
  hello: function () {
    console.log("Hello World!")
  },
  bye: function () {
    console.log("Goodbye World!")
  },
}

// 不推荐使用
exports.hello = function () {}
```

2. 导入模块.

   1.完整导入

   ```js
   const math = require("./math.js")
   ```

   2.解构导入

```js
const { hello, userInfo, byebye } = require("./exports")
```
