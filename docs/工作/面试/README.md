---
article: false
title: 面试
icon: fa6-solid:book-open-reader
---

1. React 的事件机制
React 本身使用了顶层事件委托，无论你是否手动绑定到父元素：

所有事件默认被委托到 document（或 React 17+ 的根容器）。

即使你在循环中为每个子元素写 onClick={...}，React 并不会真正绑定多个 DOM 事件监听器。

实际性能损耗不在 DOM 层，而是在 React 的事件处理逻辑和组件渲染上。