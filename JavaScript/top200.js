const secTotime = (s) => {
    let t = [0, 0, ':', 0, 0, ':', 0, 0];
    console.log('s', s)
    if (s > -1) {
        let hour = Math.floor(s / 3600)
        let min = Math.floor(s / 60) % 60
        let sec = s % 60
        if (hour < 10) {
            t[0] = 0
            t[1] = hour
        } else {
            t[0] = Math.floor(hour / 10)
            t[1] = hour % 10
        }
        if (min < 10) {
            t[3] = 0
            t[4] = min
        } else {
            t[3] = Math.floor(min / 10)
            t[4] = min % 10
        }
        if (sec < 10) {
            t[6] = 0
            t[7] = sec
        } else {
            t[6] = Math.floor(sec / 10)
            t[7] = sec % 10
        }
    }
    console.log('t', t)
    return t
}

secTotime(8299)