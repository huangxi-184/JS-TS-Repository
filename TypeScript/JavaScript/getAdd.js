let url = "example.php"

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

url = addURLParam(url, "book", "Professional JavaScript");


// POST 请求相比 GET 请求要占用更多资源。从性能方面说，发送相同数量的数据，
// GET 请求比 POST 请求要快两倍。


// XHR 进度事件:
let xhr = new XMLHttpRequest();
xhr.onload = function (event) {
    if ((xhr.status >= 200 && xhr.status < 300) ||
        xhr.status == 304) {
        alert(xhr.responseText);
    } else {
        alert("Request was unsuccessful: " + xhr.status);
    }
};
xhr.onprogress = function (event) {
    let divStatus = document.getElementById("status");
    if (event.lengthComputable) {
        divStatus.innerHTML = "Received " + event.position + " of " +
            event.totalSize +
            " bytes";
    }
};


xhr.open("get", "altevents.php", true);
xhr.send(null); 