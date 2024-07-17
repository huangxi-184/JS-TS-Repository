// ==UserScript==
// @name         Tofflon服务脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tofflon.blpharms.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blpharms.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // Your code here...
    document.body.contentEditable = true
    const imgNodeList = document.getElementsByTagName('img')
    for (let i = 0; i < imgNodeList.length; i++) {
        const youlia = document.createElement('a')
        youlia.href = imgNodeList[i].currentSrc
        youlia.download = Date.now()
        youlia.click()
        //释放内存
        youlia.remove()
    }
})();