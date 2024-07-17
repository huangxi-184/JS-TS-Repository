import { rm } from "fs"
import { promisify } from "util"

const rmAsync = promisify(rm)

async function removeDirectory(path: string) {
  try {
    await rmAsync(path, { recursive: true, force: true })
    console.log("文件夹已删除")
  } catch (err) {
    console.error("删除文件夹时出错:", err)
  }
}

removeDirectory("C:\\Users\\DELL\\Desktop\\Code\\代码")