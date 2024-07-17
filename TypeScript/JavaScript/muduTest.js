// import { duixaing } from './mudu'
const duixaing = new Proxy({ id: "小明" }, {
    get(trapTarget, property, receiver) {
        console.log(trapTarget[property])
        return [trapTarget, property, receiver]
    }
})