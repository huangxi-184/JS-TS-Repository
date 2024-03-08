import fs from 'fs'

async function axios() {
    let p = await new Promise((resolve, reject) => {
        fs.readFile('./new.txt', { encoding: "utf-8" }, (err, data) => {
            if (err) { return reject(err.message) }
            return resolve(data)
        })
    })
    return p
}

axios().then(res => console.log(res))