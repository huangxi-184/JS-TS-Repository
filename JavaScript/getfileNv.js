var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
   'method': 'GET',
   'hostname': 'tofflon.blpharms.com',
   'path': '/api/task/working/dis/ser/order/export?id=1682067229213523970&_t=1689925189352',
   'headers': {
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODk5ODkxOTAsInVzZXJfbmFtZSI6IjA4MDAzIiwianRpIjoiOGE0MmE2MTEtMGY1NS00Y2M0LThhZDctYWFlNjE5YTRmMDFlIiwidXNlckNvZGUiOiIwODAwMyIsImNsaWVudF9pZCI6InRzcCIsInNjb3BlIjpbImFsbCJdfQ.oYq7lYb1egnIm5_pbnZUsshSjlpXTqCqNwrdJ_tJ_Ds',
      'Accept': '*/*',
      'Host': 'tofflon.blpharms.com',
      'Connection': 'keep-alive'
   },
   'maxRedirects': 20
};

var req = https.request(options, function (res) {
   var chunks = [];

   res.on("data", function (chunk) {
      chunks.push(chunk);
   });

   res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log('下载成功!')
   });

   res.on("error", function (error) {
      console.error(error);
   });
});

req.end();