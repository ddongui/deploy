import { defineUserConfig, defaultTheme } from "vuepress"

export default defineUserConfig({
    base: "/deploy/",
    title: "deploy",
    description: "Publish your static website in Git",
    theme: defaultTheme({
        navbar: [{ text: "指南", link: "/guide/install" }],
        sidebar: {
            "/guide/": [
                {
                    text: "指南",
                    link: "/guide/install/",
                    children: [
                        { text: "介绍", link: "/guide/introduction/" },
                        { text: "安装", link: "/guide/install/" },
                        { text: "使用", link: "/guide/use/" },
                        { text: "类型", link: "/guide/type/" }
                    ],
                }
            ]
        },
        // 仓库名称和链接
        repoLabel: "GitHub",
        repo: "https://github.com/swordsmanSun/vuepress-plugin-demo-block",
    })
})
