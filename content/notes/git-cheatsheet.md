---
title: "Git 常用命令速查"
date: "2026-01-20"
tags: ["Git", "工具", "版本控制"]
summary: "日常开发中最常用的 Git 命令整理，包含分支管理、回退、暂存等操作。"
---

## 基础操作

```bash
# 初始化仓库
git init

# 克隆仓库
git clone <url>

# 查看状态
git status

# 添加到暂存区
git add .
git add <file>

# 提交
git commit -m "提交信息"

# 修改上次提交
git commit --amend
```

## 分支管理

```bash
# 查看分支
git branch -a

# 创建并切换分支
git checkout -b feature/new-feature
git switch -c feature/new-feature  # 新语法

# 合并分支
git merge feature/new-feature

# 变基
git rebase main

# 删除分支
git branch -d feature/done
```

## 回退操作

```bash
# 撤销工作区修改
git checkout -- <file>
git restore <file>  # 新语法

# 取消暂存
git reset HEAD <file>
git restore --staged <file>  # 新语法

# 回退提交（保留修改）
git reset --soft HEAD~1

# 回退提交（丢弃修改）
git reset --hard HEAD~1
```

## 暂存（Stash）

```bash
# 暂存当前修改
git stash

# 带消息暂存
git stash save "WIP: 正在开发的功能"

# 查看暂存列表
git stash list

# 恢复并删除
git stash pop

# 恢复不删除
git stash apply stash@{0}
```

## 查看历史

```bash
# 精简日志
git log --oneline --graph --all

# 查看文件修改历史
git log --follow -p <file>

# 查找引入 bug 的提交
git bisect start
git bisect bad
git bisect good <commit>
```

## 实用技巧

- `git cherry-pick <commit>` — 选择性合并某个提交
- `git reflog` — 查看所有操作记录，找回丢失的提交
- `git clean -fd` — 清理未跟踪的文件和目录
- `git diff --cached` — 查看暂存区和上次提交的差异
