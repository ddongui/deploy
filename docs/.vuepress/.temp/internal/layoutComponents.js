import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("G:/project/vue/06_ddui/node_modules/.pnpm/@vuepress+theme-default@2.0.0-beta.50/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("G:/project/vue/06_ddui/node_modules/.pnpm/@vuepress+theme-default@2.0.0-beta.50/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}