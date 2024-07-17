//引入模块
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require("path");
const request = require("request");

//获取页面的html结构
https.get('https://movie.douban.com/top250', function (res) {
    let html = ''
    res.on('data', function (chunk) {
        html += chunk
    })

    res.on('end', function () {
        // 获取html中的数据
        const $ = cheerio.load(html)
        let allFiles = []
        //拿到每一个item中我们需要的数据
        $('li .item').each(function () {
            const title = $('.title', this).text()
            const star = $('.info .bd .rating_num', this).text()
            const pic = $('.pic img', this).attr('src')
            //数据以对象的形式存放在数组中
            allFiles.push({
                title: title,
                star: star,
                pic: pic
            })
            getfileByUrl(pic, title, "C:\Users\DELL\Desktop\js")
        })
        //console.log(allFiles);
        //将数据写入文件中
        fs.writeFile('./files.json', JSON.stringify(allFiles), function (err, data) {
            if (err) {
                throw err
            }
            console.log('文件保存成功');
        })
    })


})

/**
 * 
 * @param {*} url  网络文件url地址
 * @param {*} fileName 	文件名
 * @param {*} dir 下载到的目录
 */
function getfileByUrl(url, fileName, dir) {
    let stream = fs.createWriteStream(path.join(dir, fileName));
    request(url).pipe(stream).on("close", function (err) {
        console.log("文件" + fileName + "下载完毕");
    });
}

// 真的牛批,网页版的vscode