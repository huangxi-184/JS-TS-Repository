// ==UserScript==
// @name         自动登录正式服
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:3200/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.localhost
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const userInfo = {
        "userCode": "08003",
        "password": "MTIzNDU2QWE=",
        "timeOffset": 8,
        "languageCode": "zh_CN",
        "verifyCode": "1"
    }

    fetch('https://tofflon.blpharms.com/api/iam/employee/login',
        {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            const accessToken = result.data.accessToken
            localStorage.setItem('token', accessToken)
        })

    window.location.replace("http://baidu.com");
})();