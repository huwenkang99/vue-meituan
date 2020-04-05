import {createElement, render, renderDom} from './element'
import diff  from './diff'
import patch from './patch'

let virtualDom1 = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['a']),
  createElement('li', {class: 'item'}, ['b']),
  createElement('li', {class: 'item'}, ['c'])
])
let virtualDom2 = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['b']),
  createElement('div', {class: 'item'}, ['3'])
])
// 本代码
// 如果平级元素互换位置，会导致重新渲染
// 新增节点也不会更新

// 将虚拟dom转化成了真实dom，渲染到页面上
let el = render(virtualDom1)
renderDom(el, window.root)

let patches = diff(virtualDom1, virtualDom2)
// 给元素打补丁，更新视图
patch(el, patches)
console.log('patches', patches);

