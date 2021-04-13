import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
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
    plugins: [reactRefresh(), legacyPlugin()],
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
        sourcemap: true,
        manifest: true,
      }
    }
  }
}
