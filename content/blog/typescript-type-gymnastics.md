---
title: "TypeScript 类型体操入门"
date: "2026-01-15"
tags: ["TypeScript", "类型系统", "前端"]
summary: "深入理解 TypeScript 高级类型用法，掌握条件类型、映射类型等核心技巧。"
---

## 为何学习高级类型？

TypeScript 的类型系统是图灵完备的，这意味着我们可以用类型来表达非常复杂的逻辑。掌握高级类型可以帮助我们写出更安全、更优雅的代码。

## 条件类型

条件类型类似于三元表达式：

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<42>;      // false
```

## 映射类型

映射类型可以基于已有类型创建新的类型：

```typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

## 模板字面量类型

TypeScript 4.1+ 支持模板字面量类型：

```typescript
type EventName = `on${Capitalize<'click' | 'focus' | 'blur'>}`;
// "onClick" | "onFocus" | "onBlur"
```

## 实用工具类型

```typescript
// 提取函数返回类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 递归 Readonly
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};
```

## 总结

TypeScript 的类型系统就像一门小型编程语言，它能帮助我们在编译时捕获错误，提升代码质量。
