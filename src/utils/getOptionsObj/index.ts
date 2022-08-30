import { Options } from "../.."
import Strategy from "../strategy"
import fs from "fs"
import { FileInfo } from "../getConfigFile"
import shell from "shelljs"

export default function getOptionsObj(fileInfos: FileInfo[]) {
    let options: Options | undefined
    const fileInfo = getFileInfo(fileInfos)
    if (fileInfo) {
        const f = handleDifferentFileExt(fileInfo.ext)
        if (f)
            options = f(fileInfo.fullPath)
    }
    return options
}

const handleDifferentFileExt = Strategy({
    json(fillFullPath: string) {
        return JSON.parse(fs.readFileSync(fillFullPath, "utf8"))
    },
    js(fillFullPath: string) {
        return require(fillFullPath)
    },
    ts(fillFullPath: string) {
        shell.exec(`tsc ${fillFullPath} --module commonjs`)
        const jsFilePath = fillFullPath.replace(/.ts/, ".js")
        const cjsFilePath = fillFullPath.replace(/.ts/, ".cjs")
        fs.renameSync(jsFilePath, cjsFilePath)
        /* require("ts-node/register") */
        const options = require(cjsFilePath).default
        // 删除cjs文件
        fs.unlinkSync(cjsFilePath)
        return options
    }
})

function getFileInfo(fileInfos: FileInfo[]) {
    let fileInfo: FileInfo | undefined
    fileInfo = fileInfos.find((fileinfo) => fileinfo.ext === "json")
    if (fileInfo) return fileInfo
    fileInfo = fileInfos.find((fileinfo) => fileinfo.ext === "ts")
    if (fileInfo) return fileInfo
    fileInfo = fileInfos.find((fileinfo) => fileinfo.ext === "js")
    if (fileInfo) return fileInfo
}
