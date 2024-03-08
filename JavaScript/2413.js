const fs = require('fs');
const http = require('http');
const path = require('path');

const imageUrls = ["http://www.sanrio.com.cn/sites/default/files/%E5%AE%98%E7%B6%B2%E8%82%96%E5%83%8F_%E7%94%BB%E6%9D%BF%2029%20%E5%89%AF%E6%9C%AC%205.png", "http://www.sanrio.com.cn/sites/default/files/melody_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/twinstars_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/cinnamoroll_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/maru_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/keroppi_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/kuromi_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/gudetama_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/pompom_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/%E5%AE%98%E7%B6%B2%E8%82%96%E5%83%8F_%E7%94%BB%E6%9D%BF%2029%20%E5%89%AF%E6%9C%AC%202.png", "http://www.sanrio.com.cn/sites/default/files/sugar_no_bg_0.png", "http://www.sanrio.com.cn/sites/default/files/coro_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/wish_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/bonbonribbon_b.png", "http://www.sanrio.com.cn/sites/default/files/tuxedo_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/charmmy_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/tingchum_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/pochacco_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/usahana_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/hellokitty_no_bg.png", "http://www.sanrio.com.cn/sites/default/files/%E5%AE%98%E7%B6%B2%E8%82%96%E5%83%8F_%E7%94%BB%E6%9D%BF%2029%20%E5%89%AF%E6%9C%AC.png"]
// 下载图片函数
function downloadImage(url, destPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        http.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => reject(err)); // 删除文件，避免空文件残留
        });
    });
}

// 主函数，下载所有图片
async function downloadAllImages() {
    const desktopPath = path.join(require('os').homedir(), 'Desktop');
    const imageFolder = path.join(desktopPath, 'DownloadedImages');

    try {
        // 创建保存图片的文件夹
        fs.mkdirSync(imageFolder, { recursive: true });

        // 循环下载图片
        for (let i = 0; i < imageUrls.length; i++) {
            const imageUrl = imageUrls[i];
            const imageName = `image${i + 1}.jpg`; // 图片名称可以根据需求修改
            const imagePath = path.join(imageFolder, imageName);
            console.log(`Downloading ${imageName} from ${imageUrl}`);
            await downloadImage(imageUrl, imagePath);
            console.log(`${imageName} downloaded successfully!`);
        }

        console.log('All images downloaded and saved to the desktop.');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// 调用主函数开始下载
downloadAllImages();