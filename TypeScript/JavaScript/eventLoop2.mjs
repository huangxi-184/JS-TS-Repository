// 使用 Promise
Promise.resolve().then(() => {
    console.log('Promise callback');
});

// 使用 process.nextTick
process.nextTick(() => {
    console.log('process.nextTick callback');
});

console.log('Main script');
