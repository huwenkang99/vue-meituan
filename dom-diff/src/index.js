import {createElement, render, renderDom} from './element'
import diff  from './diff'

let virtualDom1 = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['a']),
  createElement('li', {class: 'item'}, ['b']),
  createElement('li', {class: 'item'}, ['c'])
])
let virtualDom2 = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['b']),
  createElement('li', {class: 'item'}, ['3'])
])

let patches = diff(virtualDom1, virtualDom2)

// 将虚拟dom转化成了真实dom，渲染到页面上
// let el = render(virtualDom)
// renderDom(el, window.root)
// console.log(el);
