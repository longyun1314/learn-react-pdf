const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  __dirname + "/app/main.jsx",//已多次提及的唯一入口文件
    output: {
      path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
      filename: 'bundle.js'//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
      // contentBase: path.join(__dirname, "dist"),
      historyApiFallback: true,//不跳转
      stats: "errors-only", // 只打印错误
      inline: true, //实时刷新
      hot: true,
      port:9090
    },
    module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              'style-loader',
              'css-loader',
              'less-loader',
            ],
          }, {
                test: /\.pdf$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]'
                  }
                }
              }, {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugin('版权所有，翻版必究'),
        // new HtmlWebpackPlugin({
        //     template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        // }),
        // new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    optimization: {
        minimize: true,
      },
  }