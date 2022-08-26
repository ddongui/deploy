import fs from "fs"
import path from "path"
const base = "deploy.config"
const exts = ["json", "ts", "js"]

export default function getConfigFile(cwd: string) {
    const fileInfos: FileInfo[] = []

    exts.forEach(ext => {
        const temp = path.resolve(cwd, base + "." + ext)
        if (fs.existsSync(temp)) {
            fileInfos.push({ fullPath: temp, ext: ext })
        }
    })
    return fileInfos
}

export type FileInfo = {
    fullPath: string,
    ext: string
}
