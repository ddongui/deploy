import { defineConfig } from "./"

export default defineConfig({
    relativePath: "docs/.vuepress/dist/",
    branchName: "pages",
    files: ".",
    message: "#",
    remoteUrl: "https://github.com/ddongui/deploy.git"
})
