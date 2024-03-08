const axios = require('axios');

const headers = {
    'Content-Type': 'application/json', // 设置请求的Content-Type为JSON,
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoi6buE5pumIiwiaXBBZGRyZXNzIjoiMTcyLjE2OS42MC4zNCIsImV4cCI6MTY4NTQyMTA4MX0.hxjyLfIbhJt_GMAi23Ldkv22HXNAwWDHKk-FwRviWYo'
    // 在此添加其他需要的请求头
};

const startPost = async () => {
    try {
        let data = await axios.post('http://172.169.60.34:8088/api/maintenance/GetPageList', { "pageNumber": 1, "pageSize": 10, "machineId": null, "startDate": null, "endDate": null, "search": "", "dateRange": "", "verifyType": 2, "overdue": 2, "businessState": 2 }, { headers })
        console.log(data.data)
    } catch (error) {
        console.error(error)
    }
}

startPost()