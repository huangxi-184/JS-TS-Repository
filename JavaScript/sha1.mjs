import jsSHA1 from "jssha/sha1";

function checkSignature() {
    const token = 'bluelight'
    const timestamp = '1692334488652'
    const nonce = '6'
    const tmpArr = [token, timestamp, nonce]
    tmpArr.sort();
    const tmpStr = tmpArr.join("");
    const tmpStrSha1 = jsSHA1();
    console.log(tmpStrSha1)
}
checkSignature()