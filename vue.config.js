// module.exports = {
//     publicPath: './',
//     css: {
//         //动态处理px成rem插件
//         loaderOptions: {
//             css: {
//                 // options here will be passed to css-loader
//             },
//             postcss: {
//                 // options here will be passed to postcss-loader
//                 plugins: [require('postcss-px2rem')({
//                     //设计图的宽度/10 比如你的设计图是1920的宽度 这里你就1920/10=192
//                     remUnit: 160,
//                     remPrecision: 8 //换算的rem保留几位小数点
//                 })]
//             }
//         }
//     }
// }

const path = require("path")
const config = require("./config/projectConfig.js") // 引入子系统运行打包配置
let projectName = process.env.PROJECT_NAME // 获取package.json中scripts配置的变量

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  ...config[projectName],
  lintOnSave: false,
  // 基本路径
  // baseUrl: './',//vue-cli3.3以下版本使用
  publicPath: "./", // vue-cli3.3+新版本使用
  // 输出文件目录
  outputDir: "dist/" + projectName + "/",
  // eslint-loader 是否在保存的时候检查
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  configureWebpack:{
    resolve:{
       alias:{
          '@admin': '@/projects/admin',
          '@client': '@/projects/client'
       }
    }
  }
}
