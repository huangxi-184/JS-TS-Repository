import axios from 'axios'

const intervalLength = 1000 * 5;

async function fetchData() {
    console.log("fetching data...");
    let res = await axios.get(`https://lw.tangdoou.cn/prod-api/core/thesis/list?pageNum=1&pageSize=10&orderByColumn=a.stage%20ASC%2Ca.urgent%20DESC%2Ca.deadline&isAsc=desc&time=${Date.now()}`, { headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbklkIjoidGhlc2lzX3VzZXI6NDAiLCJybiI6IjZBSEVKVGtxVWM2TjI5NGZzamZtejJjZXNRUWJtaTJpIn0.CS4sPMK1pkGRTdHQnyJAO6JQAXmwKv6n6Okw7fSIIhQ' }, })
    console.log('完成', res.data);
}

setInterval(() => {
    fetchData()
}, intervalLength);