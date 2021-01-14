module.exports = {
    publicPath: './',
    css: {
        //动态处理px成rem插件
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    //设计图的宽度/10 比如你的设计图是1920的宽度 这里你就1920/10=192
                    remUnit: 160,
                    remPrecision: 8 //换算的rem保留几位小数点
                })]
            }
        }
    }
}