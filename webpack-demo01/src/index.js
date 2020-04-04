// webpack打包图片
// 1.js中创建图片引入
import logo from './logo.png';
// file-loader 会在内部生成一张图片到build目录下，把生成的名字返回
let img = new Image();
img.src = logo;
document.body.appendChild(img)
// 2. css background:引入
  // 再在js中导入css文件
// 3. html中img src引入



// import $ from 'expose-loader?$!jquery';
// import $ from 'jquery'
// // expose-loader 暴露全局loader 内联的loader
// // console.log(window.$);
// console.log($);//在每个模块注入$

// const str = require('./a.js')
// console.log(str);

// require('./index.css')
// require('./index.less')

// // cnpm i babel-loader @babel/core @babel/preset-env -D
// // ES6 -> es5
// let fn = () => {
//   console.log('es6');
// }
// fn()
// // 装饰器   
// /**
//  * plugins: [
//               ["@babel/plugin-proposal-decorators", {"legacy": true}],
//               ['@babel/plugin-proposal-class-properties', { "loose": true }]
//             ]
//  */
// @log
// class A{
//   a = 1;
// }
// let a = new A();
// console.log('a  :', a.a);

// function log(target) {
//   console.log('target:  ', target);
// }
