import axios from 'axios'
import fs from 'fs'
import https from 'https'
import * as XLSX from 'xlsx/xlsx.mjs';

// const getFile = async () => {
//     let fileDetail = await axios.get('https://docs-import-export-1251316161.cos.ap-guangzhou.myqcloud.com/export/xlsx/bUdDxqvJzazH/a753b170c49e6a6d876f303f3e69aa76.json.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIDBAvQgh24SZPnxur0C9qfpkQp24pMCOu8%2F20230713%2Fap-guangzhou%2Fs3%2Faws4_request&X-Amz-Date=20230713T043807Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3Bfilename%3D%22.xlsx%22%3Bfilename%2A%3DUTF-8%27%27%25E4%25B8%259C%25E5%25AF%258C%25E9%25BE%2599%25E5%25AE%2589%25E5%2585%25A8%25E6%259C%2588%25E9%259A%2590%25E6%2582%25A3%25E5%25A4%25A7%25E5%25AE%25B6%25E6%259F%25A5%25EF%25BC%2588%25E6%2594%25B6%25E9%259B%2586%25E7%25BB%2593%25E6%259E%259C%25EF%25BC%2589.xlsx&X-Amz-Signature=0b2c8a177e7272732168aadead22516368d561539f41d9975f1dbc39fc946422')
// }

const downloadFile = (url, filename) => {
    const file = fs.createWriteStream(filename);

    https.get(url, response => {
        response.pipe(file);

        file.on('finish', () => {
            file.close();
            console.log('文件下载完成。');
        });
    }).on('error', error => {
        console.error('文件下载失败:', error);
    });
}


const main = async () => {
    await downloadFile('https://docs-import-export-1251316161.cos.ap-guangzhou.myqcloud.com/export/xlsx/bUdDxqvJzazH/a753b170c49e6a6d876f303f3e69aa76.json.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIDBAvQgh24SZPnxur0C9qfpkQp24pMCOu8%2F20230713%2Fap-guangzhou%2Fs3%2Faws4_request&X-Amz-Date=20230713T043807Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3Bfilename%3D%22.xlsx%22%3Bfilename%2A%3DUTF-8%27%27%25E4%25B8%259C%25E5%25AF%258C%25E9%25BE%2599%25E5%25AE%2589%25E5%2585%25A8%25E6%259C%2588%25E9%259A%2590%25E6%2582%25A3%25E5%25A4%25A7%25E5%25AE%25B6%25E6%259F%25A5%25EF%25BC%2588%25E6%2594%25B6%25E9%259B%2586%25E7%25BB%2593%25E6%259E%259C%25EF%25BC%2589.xlsx&X-Amz-Signature=0b2c8a177e7272732168aadead22516368d561539f41d9975f1dbc39fc946422', '默认文件.xlsx')
    let workbook = XLSX.readFile('默认文件.xlsx', {})
    console.log(workbook)
}

main()

