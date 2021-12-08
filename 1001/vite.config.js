import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  // TODO: 生产环境路径
  base: isProd ? '/' : '/',
  envDir: path.resolve(__dirname, 'src/config/env'),
  server: {
    host: '0.0.0.0',
    port: '8020',
  },
  plugins: [
    vue(),
    // 自动导入使用过的vant组件样式
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math"; @import "@/assets/styles/_var.scss";`,
      },
    },
  },
})
