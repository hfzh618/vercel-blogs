---
title: "JavaScript 异步编程笔记"
date: "2026-02-10"
tags: ["JavaScript", "异步", "Promise"]
summary: "系统整理 JavaScript 异步编程相关知识，包括回调、Promise、async/await 等。"
---

## 异步编程的演进

JavaScript 的异步编程经历了从回调到 Promise 再到 async/await 的演进过程。

### 1. 回调函数（Callback）

最早期的异步处理方式：

```javascript
fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

**问题**：回调地狱（Callback Hell）

### 2. Promise

ES6 引入的解决方案：

```javascript
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### 3. Async/Await

ES2017 引入的语法糖：

```javascript
async function getData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```

## 常用并发模式

```javascript
// 并行执行
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);

// 竞速
const fastest = await Promise.race([
  fetchFromServer1(),
  fetchFromServer2()
]);

// 全部完成（无论成败）
const results = await Promise.allSettled([
  task1(),
  task2(),
  task3()
]);
```

## 事件循环（Event Loop）

- **宏任务**：setTimeout, setInterval, I/O
- **微任务**：Promise.then, MutationObserver, queueMicrotask
- 每次执行完一个宏任务后，会清空所有微任务队列

## 要点总结

| 方式 | 优点 | 缺点 |
|------|------|------|
| 回调 | 简单直接 | 嵌套深，难维护 |
| Promise | 链式调用 | 仍需 `.then` |
| async/await | 同步写法 | 需要 try/catch |
