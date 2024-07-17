import axios from "axios";

let promiseArr = [];

for (let i = 0; i < 10; i++) {
    const response = axios.get(`https://juejin.cn/id=${i}`)
    promiseArr.push(response);
}

Promise.all(promiseArr).then(responses => {
    for (let i = 0; i < responses.length; i++) {
        if(responses[i].data){
            
        }
    }
})
    .catch(error => {
        console.log(error);
    })  