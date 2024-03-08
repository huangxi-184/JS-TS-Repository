import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchData() {
    try {
        const imgRes = await axios.get('https://smp.tofflon.com/assets/home_img.4564360e.png', { responseType: 'stream' });
        const imagePath = path.join(__dirname, 'bing_daily_image.jpg');
        const writer = createWriteStream(imagePath);

        // 将图片数据写入到文件中
        imgRes.data.pipe(writer);

        // 等待流完成写入
        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        console.log('图片已成功保存到:', imagePath);
    } catch (err) {
        console.error('保存图片时发生错误:', err);
    }
}

fetchData();
