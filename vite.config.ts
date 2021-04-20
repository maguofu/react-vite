import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
// 传统浏览器可以通过插件 @vitejs/plugin-legacy 来支持，它将自动生成传统版本的 chunk 和其相应 ES 语言特性方面的 polyfill。
// 兼容版的 chunk 只会在不支持原生 ESM 的浏览器中有按需加载。
import legacyPlugin from '@vitejs/plugin-legacy';
const { resolve } = require('path')

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh(), legacyPlugin()],
//   server: {
//     proxy: {
//       '/omsdata': {
//         target: 'http://yapi.sftcwl.com/mock/925',
//         changeOrigin: true,
//       }
//     }
//   }
// })


export default ({ command, mode }) => {
  console.log(command, mode);
  let commonConfig = {
    plugins: [
      reactRefresh(),
      legacyPlugin({
        targets: ['defaults', 'not IE 11']
      }),
  ],
  }
  if (command === 'serve') {
    return {
      // serve 独有配置
      ...commonConfig,
      server: {
        proxy: {
          '/omsdata': {
            target: 'http://yapi.sftcwl.com/mock/925',
            changeOrigin: true,
          }
        }
      }
    }
  } else {
    return {
      // build 独有配置
      ...commonConfig,
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // sourcemap: true,
        // manifest: true,
      }
    }
  }
}
