import axios from 'axios'
import fs from 'fs/promises'

(async function getDocument() {
    const result = await axios.get('https://juejin.cn/post/7343534050148843560')

    try {
        await fs.writeFile('./juejin.html', result.data as string)
    } catch (error) {
        throw error;
    }
})()