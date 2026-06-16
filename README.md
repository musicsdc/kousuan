# 家庭练习纸

> 一份练习，一键打印。纯静态，无需构建。

线上地址：[52kousuan.site](https://52kousuan.site)

## 快速启动

```bash
python -m http.server 5000
# 浏览器打开 http://localhost:5000
```

## 页面一览

| 文件 | 用途 |
|------|------|
| `index.html` | 首页（三入口卡片 + 使用说明） |
| `kousuan.html` | 口算练习（1-6 年级，25+ 种题型） |
| `english.html` | 英语默写（译林版 3A-6B，中英互默） |
| `combo.html` | 精选套题（题目+答案分页打印） |
| `js/wordbank.js` | 英语单词库 |
| `styles/common.css` | 共享 CSS（设计令牌 + 打印规则） |

## 教材版本

| 年级 | 版本 |
|------|------|
| 3-4 | 2024 新版 |
| 5-6 | 现行版（待升级 2024 新版） |

## 项目文档

- [PROGRESS.md](PROGRESS.md) — 当前功能清单和待办
- [CHANGELOG.md](CHANGELOG.md) — 历次更新记录
- [CLAUDE.md](CLAUDE.md) — 项目约定和开发规范
