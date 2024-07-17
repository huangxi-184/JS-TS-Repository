import axios from "axios";
import fs from "fs/promises";

const requestData = {
    pageNum: 1,
    pageSize: 10
}

const timeA = Date.now();

let res = await axios.post(`https://smp.tofflon.com/api/customer/master/getCustomerList`,
    requestData,
    {
        headers: {
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDk1OTczOTUsInVzZXJfbmFtZSI6IjA4MDAzIiwianRpIjoiZWI1NjY3YzQtNDJlNS00MjI5LWI2MTgtNWQ3MGRkNTM3MDdlIiwidXNlckNvZGUiOiIwODAwMyIsImNsaWVudF9pZCI6InRzcCIsInNjb3BlIjpbImFsbCJdfQ.SSQBrcWAz-w_HT6Ybf8nrKr-CcZiFJ5M3cOrrDQGT1o'
        }
    })

const timeB = Date.now();

fs.writeFile("./data.json", JSON.stringify(res.data)).then(() => {
    const timeC = Date.now();
    console.log("写入成功");

    console.log(`请求时间：${timeB - timeA}ms`);
    console.log(`写入时间：${timeC - timeB}ms`);
})
    .catch((err) => {
        console.log(err);
    })
