// let uploadWhiteArea = document.getElementsByClassName("fst-edt")[0]
// uploadWhiteArea.click()
// _g().getWidgetByCell("I2").doClick()

let trTable = document.getElementById("I3-0-0")
trTable.click()
trTable.click()

setTimeout(() => {
    let imgUpload = document.getElementsByClassName('fr-fileupload')[0]
    let fileList
    imgUpload.addEventListener('change', (e) => {
        fileList = e.target.files[0]
        let data = new FormData();
        data.append("type", "人员证件照");
        data.append("canvas", fileList);
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let temporaryURL = JSON.parse(this.responseText).data[0].url
                _g().getWidgetByName("saveURL").setValue(temporaryURL)
                const imgDom = document.getElementById("H5-0-0").querySelector("div").querySelector("img")
                imgDom.src = temporaryURL
            }
        });
        xhr.open("POST", "https://collect.tofflon.com:3334/file/upload");
        xhr.send(data);
    })
}, 400)

let fristOpen = document.getElementById("H5-0-0")
fristOpen.addEventListener('click', (e) => {
    const link = _g().getWidgetByCell("J5").getValue()
    window.open(link)
})

let btnDom = document.getElementsByClassName('x-emb-ok')[0]
btnDom.addEventListener('click', (e) => {

})

// 获取uuid. 用于匹配角色
_g().getWidgetByName("uuid").getValue()

_g().getWidgetByCell("H4").getValue()

const imgDom = document.getElementsByClassName("linkspan")[0].querySelector("div").querySelector("div")

imgDom.style.backgroundImage = "url('https://collect.tofflon.com:3334/1692691253905Screenshot_2023-08-22-16-00-25-27.jpg')"

imgDom.style.background = "url('https://collect.tofflon.com:3334/1692691253905Screenshot_2023-08-22-16-00-25-27.jpg') no-repeat center"


document.get

"url(" + _g().getCellValue("J5") + ")"

debugger

// 
_g().setCellValue("J6", _g().getCellValue("J5"))

// 创建一个 input 元素
let fileInput = document.createElement('input');
// 设置 input 的类型为 file
fileInput.type = 'file';
// 设置 input 的 id 属性
fileInput.id = 'fileInput';

// 添加change事件监听器
fileInput.addEventListener('change', function (event) {
    // 获取用户选择的文件
    let selectedFile = event.target.files[0];
    if (selectedFile) {
        let formData = new FormData();
        formData.append("type", "人员证件照");
        formData.append("canvas", selectedFile);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://collect.tofflon.com:3334/file/upload', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                window.myfileImgUrl = JSON.parse(xhr.responseText).data[0].url
                const img = document.querySelector('#H5-0-0 span:first-child div:first-child img')
                img.src = window.myfileImgUrl
                _g().setCellValue(window.myfileImgUrl)
            }
        };
        xhr.send(formData);
    } else {
        console.error('没有选择文件');
    }
});

window.myfileInput = fileInput

fileInput.click()

// 选中图像框

// 创建一个新的XHR对象
let xhr2 = new XMLHttpRequest();

// 配置POST请求，指定请求方法和URL
xhr2.open('POST', 'https://collect.tofflon.com:3334/updateImgURL', true);

// 设置请求头，指定内容类型为 JSON（可根据需要更改）
xhr2.setRequestHeader('Content-Type', 'application/json');

// 创建要发送的数据对象，将其转换为JSON字符串
let data = {
    nationalIdentificationNumber: _g().getCellValue("D12"),
    newUrl: window.myfileImgUrl
};
let jsonData = JSON.stringify(data);

// 监听请求状态变化
xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4) { // 请求完成
        if (xhr2.status === 200) { // HTTP状态码200表示成功
            // 在这里处理成功的响应数据
            console.log('成功响应:', xhr2.responseText);
        } else {
            console.error('请求失败，HTTP状态码：', xhr2.status);
        }
    }
};

// 发送POST请求并传递数据
xhr2.send(jsonData);

