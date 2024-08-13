import fs from "fs"

async function axios() {
  console.time("读取文件耗时")
  let p = await new Promise((resolve, reject) => {
    fs.readFile("./new.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message)
      }
      return resolve(data)
    })
  })
  return p
}

axios().then((res) => {
  console.timeEnd("读取文件耗时")
  //   console.log(res)
})
