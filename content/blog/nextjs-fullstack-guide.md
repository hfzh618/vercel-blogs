---
title: "Next.js 全栈开发指南"
date: "2026-03-01"
tags: ["Next.js", "React", "全栈"]
summary: "从零开始学习 Next.js 全栈开发，涵盖 App Router、服务端组件、API 路由等核心概念。"
---

## 什么是 Next.js？

Next.js 是一个基于 React 的全栈 Web 框架，它提供了服务端渲染（SSR）、静态生成（SSG）、API 路由等开箱即用的功能。

### 核心特性

- **App Router**: Next.js 13+ 引入的全新路由系统
- **服务端组件**: 默认在服务端渲染，减少客户端 JavaScript 体积
- **文件系统路由**: 基于文件结构自动生成路由
- **API 路由**: 轻松创建后端 API

## 快速开始

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm run dev
```

## App Router 详解

App Router 使用 `app` 目录来定义路由，每个文件夹代表一个路由段：

```
app/
  page.tsx        → /
  about/
    page.tsx      → /about
  blog/
    [slug]/
      page.tsx    → /blog/:slug
```

### 布局（Layout）

布局是页面之间共享的 UI 结构：

```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

## 数据获取

在 App Router 中，我们可以直接在服务端组件中使用 `async/await` 来获取数据：

```tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}
```

## 总结

Next.js 是现代 Web 开发的强大工具，无论是个人项目还是企业级应用，都能提供出色的开发体验和性能表现。
