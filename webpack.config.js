const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack4')

module.exports = {
    mode: 'production',
    entry: './src/lib/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'vue-toast-demo.js',
        libraryTarget: 'umd',
        library: 'VueToastDemo',
    },

    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: '/node_modules/'

            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],

}