const config = {
    admin: {
      pages: {
        index: {
          entry: 'src/projects/admin/main.js',
          template: 'public/index.html',
          filename: 'index.html'
        }
      },
      publicPath: './',
      css: {
        requireModuleExtension: true
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
      },
      // configureWebpack:{
      //   resolve:{
      //      alias:{
      //         '@assets':'@/assets',
      //         '@components':'@/components',
      //         '@views':'@/views',
      //         '@admin': '@/projects/admin',
      //      }
      //   }
      // }
    },
    client: {
      pages: {
        index: {
          entry: 'src/projects/client/main.js',
          template: 'public/index.html',
          filename: 'index.html'
        }
      },
      publicPath: './',
      css: {
        //动态处理px成rem插件
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            // postcss: {
            //     // options here will be passed to postcss-loader
            //     plugins: [require('postcss-px2rem')({
            //         //设计图的宽度/10 比如你的设计图是1920的宽度 这里你就1920/10=192
            //         remUnit: 160,
            //         remPrecision: 8 //换算的rem保留几位小数点
            //     })]
            // }
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
      },
      // configureWebpack:{
      //   resolve:{
      //      alias:{
      //         '@assets':'@/assets',
      //         '@components':'@/components',
      //         '@views':'@/views',
      //         '@admin': '@/projects/admin',
      //      }
      //   }
      // }
      chainWebpack(config) {
        // it can improve the speed of the first screen, it is recommended to turn on preload
        // it can improve the speed of the first screen, it is recommended to turn on preload
        // config.plugin('preload').tap(() => [
        //   {
        //     rel: 'preload',
        //     // to ignore runtime.js
        //     // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        //     fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        //     include: 'initial'
        //   }
        // ])
    
        // // when there are many pages, it will cause too many meaningless requests
        // config.plugins.delete('prefetch')
    
        // set svg-sprite-loader
        config.module
          .rule('svg')
          .exclude.add(resolve('src/projects/client/assets/icons'))
          .end()
        config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/projects/client/assets/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
          .end()
      }
    }
  }
  module.exports = config
