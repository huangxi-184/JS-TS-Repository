const axios = require("axios")
const fs = require("fs")
const path = require("path")

const headers = {
  accept: "application/json, text/plain, */*",
  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  referer: "https://www.zhipin.com/web/geek/job?query=Java&city=101020100",
  "sec-ch-ua": `"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"`,
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": `"Windows"`,
  "x-requested-with": "XMLHttpRequest",
  Cookie:
    "lastCity=101020100; wd_guid=70cdf6c5-71f3-4457-8ce3-27e253a09101; historyState=state; _bl_uid=U5lLtfmghd6mb9sdkmqys57v9Ikn; sid=sem_pz_bdpc_dasou_title; __zp_seo_uuid__=1c2af84f-7063-4347-9ece-2fab8d1340b2; __g=sem_pz_bdpc_dasou_title; __l=r=&l=%2Fwww.zhipin.com%2Fshanghai%2F%3Fsid%3Dsem_pz_bdpc_dasou_title&s=1&g=%2Fwww.zhipin.com%2Fshanghai%2F%3Fsid%3Dsem_pz_bdpc_dasou_title&s=3&friend_source=0; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1687737812,1687742160; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1687742160; __c=1687742160; __a=91953325.1679365388.1687737812.1687742160.47.4.2.2; __zp_stoken__=c66feOGBEKEMAUEVYAExIBF1iJjNwamhPfz8ZN1xSRg4tJGtoewsFCkEkKwMPSSMFF24PJDoccntMLzZnBVoua2ldKFMVO3VwPCB%2BKDhSRkZVCUttPm1QGm8NZVxuG3hOVVc9XyB9DX5adEY%3D",
}

const startPost = async () => {
  try {
    let bigJobList = []
    for (let i = 1; i <= 10; i++) {
      let data = await axios.get(
        `https://www.zhipin.com/wapi/zpgeek/search/joblist.json?
            scene=1&query=项目经理&city=101020100&experience=&payType=
            &partTime=&degree=&industry=&scale=&stage=&position=&jobType=&salary=&multiBusinessDistrict
            =&multiSubway=&page=${i}&pageSize=30`,
        { headers }
      )
      bigJobList = bigJobList.concat(data.data)
    }
    fs.writeFile(
      "./boss1.json",
      JSON.stringify({
        allData: bigJobList,
      }),
      function (err, data) {
        if (err) {
          throw err
        }
        console.log("文件保存成功")
      }
    )
  } catch (error) {
    console.error(error)
  }
}

/**
 *
 * @param {*} url  网络文件url地址
 * @param {*} fileName 	文件名
 * @param {*} dir 下载到的目录
 */
function getfileByUrl(url, fileName, dir) {
  let stream = fs.createWriteStream(path.join(dir, fileName))
  request(url)
    .pipe(stream)
    .on("close", function (err) {
      console.log("文件" + fileName + "下载完毕")
    })
}

startPost()
