
const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html' , // 相对于打包路径index.html的路径
    filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    lintOnSave: process.env.NODE_ENV === 'development', // 是否开启eslint保存检测，有效值：ture | false | 'error'
    productionSourceMap: false,
/*    configureWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
        console.log(config)
    },*/
    chainWebpack: config => {
        //用@代替/src这个目录，避免写错路径
        config.resolve.alias.set('@', resolve('src'))

        //svg配置
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/icons')) //处理svg目录（根据你建的文件路径）
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    css: {

    },
    devServer: {
        // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
        proxy: { //配置多个跨域
            "/api": {
                target: "http://172.11.11.11:7071",
                changeOrigin: true,
                // ws: true,//websocket支持
                secure: false,
                pathRewrite: {
                    "^/api": "/"
                }
            },
            "/api2": {
                target: "http://172.12.12.12:2018",
                changeOrigin: true,
                //ws: true,//websocket支持
                secure: false,
                pathRewrite: {
                    "^/api2": "/"
                }
            },
        },
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        host: "0.0.0.0",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
    },
}
