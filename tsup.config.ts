import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src/bin/index.ts", "src/index.ts"],
    format: ["cjs", "esm"],
    clean: true,
    dts: "src/index.ts",
    // 删除bin中的cjs和入口中的mjs
    onSuccess: "del dist\\bin\\index.js dist\\index.cjs dist\\chunk-*.js"
})
