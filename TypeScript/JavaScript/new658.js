// 创建包含 4 个线程的线程池
const workers = [];
for (let i = 0; i < 4; ++i) {
    workers.push(new Worker('./worker.js'));
}
// 在最后一个工作者线程完成后打印最终值
let responseCount = 0;
for (const worker of workers) {
    worker.onmessage = () => {
        if (++responseCount == workers.length) {
            console.log(`Final buffer value: ${view[0]}`);
        }
    };
}
// 初始化 SharedArrayBuffer 
const sharedArrayBuffer = new SharedArrayBuffer(4);
const view = new Uint32Array(sharedArrayBuffer);
view[0] = 1;
// 把 SharedArrayBuffer 发给每个线程
for (const worker of workers) {
    worker.postMessage(sharedArrayBuffer);
}