export interface Options {
    /**
     * deploy目标的相对路径
     */
    relativePath: string,
    /**
     * 分支名字
     */
    branchName: string,
    /**
     * 要推送的文件(在deploy目标路径下)
     */
    files: string,
    /**
     * 推送附加消息
     */
    message: string,
    /**
     * 远程仓库链接
     */
    remoteUrl: string
}


export function defineConfig(options: Options) {
    return options
}
