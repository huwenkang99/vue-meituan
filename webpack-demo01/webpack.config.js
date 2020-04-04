let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCss = require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let webpack = require('webpack')
module.exports = {
  optimization: {//优化项
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCss()
    ]
  },
  devServer: {//开发服务器配置
    port: 3000,
    progress: true,
    contentBase: './build',
    // open: true,
    compress: true
  },
  mode: 'production',//模式
  entry: './src/index.js',//入口
  output: {
    filename: 'bundle.[hash:8].js',//打包后的文件名
    path: path.resolve(__dirname, 'build'),//必须是一个绝对路径
  },
  // externals: {
  //   jquery: '$'
  // },
  plugins: [//放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,//删除双引号
        collapseWhitespace: true,//折叠成一行
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  module: {//模块
    rules: [
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        // 当图片小于多少k的时候用base64进行转换
        // 否则用file-loader产生真实的图片
        use: {
          loader: 'url-loader',
          options: {
            limit: 200*1024
          }
        }
      },
      // {
      //   test: require.resolve('jquery'),
      //   use: 'expose-loader?$'
      // },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       enforce: 'pre',//强制previous
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            // class 转es5
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ['@babel/plugin-proposal-class-properties', { "loose": true }],
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      //规则 css-loader  解析@import语法
      // style-loader 负责把css插入到head标签中
      // loader的特点希望单一，用法：一个loader可用字符串，多个loader可用数组
      // loader是有顺序的，默认从右向左执行，从下到上执行
      // loader还可以写成对象形式 ，可设置参数
      {
        // 可以处理less、sass、stylus、node-scss、scss-loader
        test: /\.css$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insert: 'head'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      // {test: /\.js$/, use: []},
      {
        // 可以处理less文件
        test: /\.less$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insert: 'head'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'//less->css
        ]
      }
    ]
  }
}