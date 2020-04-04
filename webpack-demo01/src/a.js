
module.export = 'a.js   after';
class B{

}

// 构造器   
// generator Promise  可用npm install --save-dev @babel/plugin-transform-runtime
// npm install --save @babel/runtime
function * gen(params) {
  yield 1;
}
console.log(gen().next());

require('@babel/polyfill');
// 需要该插件支持@babel/polyfill
'aaa'.includes('a')