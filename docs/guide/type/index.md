# 类型

配置文件的配置对象类型

```ts
export interface Option {
    // deploy目标的相对路径
    relativePath: string,
    // 仓库分支名字
    branchName: string,
    // 要推送的文件(在deploy目标路径下)
    files: string,
    // 推送附加消息
    message: string,
    // 远程仓库链接
    remoteUrl: string
}
```
