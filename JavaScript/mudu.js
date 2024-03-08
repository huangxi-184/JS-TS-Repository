export { duixaing }
const duixaing = new Proxy({ id: "小明" }, {
    get() {
        return 'handler override';
    }
})