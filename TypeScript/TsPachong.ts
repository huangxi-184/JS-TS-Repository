import axios from "axios"

let promiseArr: Promise<any>[] = []

for (let i = 0; i < 10; i++) {
  const response = axios.get(`https://juejin.cn/id=${i}`)
  promiseArr.push(response)
}

Promise.all(promiseArr)
  .then((responses) => {
    console.log(responses.length)
  })
  .catch((error) => {
    console.log(error)
  })
