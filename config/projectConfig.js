const config = {
    admin: {
      pages: {
        index: {
          entry: 'src/projects/admin/main.js',
          template: 'public/index.html',
          filename: 'index.html'
        }
      },
      devServer: {
        port: 8085, // 端口地址
        open: false, // 是否自动打开浏览器页面
        host: 'localhost', // 指定使用一个 host，默认是 localhost
        https: false, // 使用https提供服务
        disableHostCheck: true,
        // 设置代理
        // proxy: {
        //   '/open_api': {
        //     target: '接口地址',
        //     changeOrigin: true
        //   }
        // }
      }
    },
    client: {
      pages: {
        index: {
          entry: 'src/projects/client/main.js',
          template: 'public/index.html',
          filename: 'index.html'
        }
      },
      devServer: {
        port: 8080, // 端口地址
        open: false, // 是否自动打开浏览器页面
        host: 'localhost', // 指定使用一个 host，默认是 localhost
        https: false, // 使用https提供服务
        disableHostCheck: true,
        // 设置代理
        // proxy: {
        //   '/auth_api': {
        //     target: '接口地址',
        //     changeOrigin: true,
        //     pathRewrite: {
        //       // '^/auth_api': ''
        //     }
        //   }
        // }
      }
    }
  }
  module.exports = config
