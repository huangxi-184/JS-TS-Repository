import axios from "axios"
import jwt from "jsonwebtoken"
import dayjs from "dayjs"

async function getToken() {
  const result = await axios.post("https://smp.tofflon.com/api/iam/employee/login", {
    userCode: "02699",
    password: "MTIzNDU2QWE=",
    timeOffset: 8,
    languageCode: "zh_CN",
    verifyCode: "",
  })

  const decoded: any = jwt.decode(result.data.data.accessToken)
  const exp = dayjs(decoded?.exp * 1000).format("YYYY-MM-DD HH:mm:ss")
  console.log("JWT:", result.data.data.accessToken)
  console.log("Token Expiration Time:", exp)
}

setInterval(() => {
  getToken()
}, 1000 * 30)
