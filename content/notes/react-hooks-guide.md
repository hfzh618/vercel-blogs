---
title: "React Hooks 完全指南"
date: "2026-02-25"
tags: ["React", "Hooks", "前端"]
summary: "全面整理 React Hooks 的使用方法和最佳实践，包含常见陷阱和解决方案。"
---

## 基础 Hooks

### useState

```tsx
const [count, setCount] = useState(0);

// 函数式更新（基于前一个状态）
setCount(prev => prev + 1);
```

### useEffect

```tsx
useEffect(() => {
  // 副作用逻辑
  const subscription = subscribe(id);
  
  // 清理函数
  return () => subscription.unsubscribe();
}, [id]); // 依赖数组
```

### useContext

```tsx
const ThemeContext = createContext('light');

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>按钮</button>;
}
```

## 进阶 Hooks

### useReducer

适合复杂状态逻辑：

```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

### useMemo & useCallback

```tsx
// 缓存计算结果
const expensiveValue = useMemo(() => computeExpensive(a, b), [a, b]);

// 缓存函数引用
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### useRef

```tsx
const inputRef = useRef(null);
const prevValue = useRef(value);

// 聚焦输入框
inputRef.current?.focus();

// 保存前一个值
useEffect(() => {
  prevValue.current = value;
}, [value]);
```

## 自定义 Hooks

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}
```

## 常见陷阱

1. **闭包陷阱**：useEffect 中引用过期的 state
2. **无限循环**：dependence 数组中放入对象或数组
3. **过度使用 useEffect**：很多场景可以用事件处理代替

## Rules of Hooks

- 只在 React 函数组件或自定义 Hook 中调用
- 只在最顶层调用，不要在循环、条件或嵌套函数中调用
