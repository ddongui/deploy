# 使用

## 通过局部安装使用

**在你的项目根目录下的 `packages.json `中加入**

```json
{
    "scripts": {
        "deploy": "deploy"
    }
}
```

**在你的项目根目录下创建配置文件，支持三种类型(`js---commomJs模式`, `ts`, `json`)**
1. `deploy.config.json`

```json
{
    "relativePath": "./docs/.vuepress/dist",
    "branchName": "main",
    "files": ".",
    "message": "#",
    "remoteUrl": "https://github.com/*/*.git"
}
```

2. `deploy.config.ts`

```ts
import {defineConfig} from "@ddongui/deploy"

export default defineConfig({
    relativePath: "./docs/.vuepress/dist",
    branchName: "main",
    files: ".",
    message: "#",
    remoteUrl: "https://github.com/*/*.git"
})
```
3. `deploy.config.js`

```js
module.exports = {
    relativePath: "./docs/.vuepress/dist",
    branchName: "main",
    files: ".",
    message: "#",
    remoteUrl: "https://github.com/*/*.git"
}
```
## 通过全局安装使用

和局部安装的唯一区别是不需要在`packages.json` 中加入 `script` 属性, 直接可以在项目根目录下输入命令 `deploy`
