# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **每次新会话必读**: [PROJECT.md](PROJECT.md)（项目背景与技术约定）、[PROGRESS.md](PROGRESS.md)（当前进度与待办）、[README.md](project_20260601_092940/projects/README.md)（最新状态总览）

## 项目概述

家庭教育打印工具集，包含三个子工具：

| 工具 | 文件 | 状态 |
|------|------|------|
| **口算练习** | `project_20260601_092940/projects/kousuan.html` | 已上线 |
| **英语默写** | `project_20260601_092940/projects/english.html` | 已上线 |
| **精选套题** | `project_20260601_092940/projects/combo.html` | 已上线 |

纯静态 Web 应用，HTML + CSS + JS，一键生成可打印的 A4 练习纸，无构建/无依赖。

## 运行方式

所有源代码在 `project_20260601_092940/projects/` 下：

```bash
cd project_20260601_092940/projects
python -m http.server 5000 --bind 0.0.0.0
```

浏览器打开 `http://localhost:5000`。两个工具通过顶部链接互相跳转。

## 目录结构

```
kousuan/
├── CLAUDE.md、PROJECT.md、PROGRESS.md    # 项目文档
├── project_20260601_092940/
│   └── projects/
│       ├── index.html                     # 口算练习（内联 CSS/JS，~1160 行）
│       ├── english.html                   # 英语默写（~700 行，内联 CSS/JS）
│       ├── js/
│       │   └── wordbank.js               # 英语单词数据（3A-3B）
│       ├── assets/                       # 历史版本 HTML、参考图片、单词表文件
│       ├── styles/
│       │   └── main.css                  # Coze 模板残留（未被引用）
│       └── docs/plans/
│           ├── 2026-06-01-english-dictation-design.md  # 英语默写设计方案
│           └── 2026-06-01-english-dictation-plan.md    # 实施计划
```

## 架构概览

### 口算练习（index.html）

**单文件应用**，所有 HTML/CSS/JS 内联在一个文件中。核心架构：

**题型系统** — 定义在 `typeDefs` 对象中（`index.html:347`），按年级 1-6 分组。每个题型：
```js
{ id: 'g3f', label: '分数初步', gen: function() { return { html: '...', answer: '...' }; } }
```
- `gen()` 返回 `{html, answer}` — html 是内联样式的 HTML 表达式，answer 是纯文本答案
- 每个年级约 2-5 种题型，共 ~25 种

**生成流程**：
1. 选择年级 → `selectGrade()` 更新 `currentGrade`，重新渲染题型 pill 按钮
2. `generate()`：取选中题型，按 `currentCount` 循环生成，`{html}` 去重，shuffle 打乱
3. 渲染到 `.paper` 容器，`cols-4` / `cols-5` 网格布局
4. 多页时每页一个 `.paper`，`@media print` 中 `page-break-after: always` 分页

**关键生成器函数**（`index.html:390-919`）：
| 函数 | 用途 |
|------|------|
| `genAddSub(min, max)` | 加减法 |
| `genMul(aMin, aMax, bMin, bMax)` | 乘法 |
| `genDiv(aMin, aMax, bMin, bMax)` | 除法 |
| `genFracArith(ops)` | 分数四则运算 |
| `genFracChain()` | 分数连乘（4 种模式：链式约分/对消/因子池/随机） |
| `genEquation(maxN)` | 解方程（9 种变体） |
| `genPercent()` | 百分数（求百分比/分数化百分数/逆向/折扣） |
| `genRatio()` | 比例（化简比/求比值/解比例） |
| `genDecConcept()` | 小数概念（分数↔小数转换/比大小） |

### 英语默写（english.html）

与口算共享同一套设计令牌（CSS 变量，差异仅 accent 色），逻辑在 `english.html` 中内联，数据外置到 `js/wordbank.js`。

**核心功能**：
- 年级选择（3-9）、册别（上/下册）
- 单元多选（pill 按钮 + 全选/全不选）
- 默写模式：中→英 / 英→中 / 混合
- 单词选取：合并选中单元 → 去重 → shuffle → 按每题数截取

**数据模型**（`wordbank.js`）：
```js
var wordBank = {
  "3A": {
    label: "三年级上册",
    units: [
      { unit: "Unit 1 Hello!", words: [{ en: "hello", zh: "你好" }, ...] },
      ...
    ]
  }
};
```
目前仅 3A 和 3B 有数据，后续按教材进度扩充。

### 共享设计系统

两个文件通过 CSS 变量共享视觉语言：

```css
:root {
  --paper: #FFF9F0;  --card: #FFFFFF;  --ink: #3B3228;
  --ink-light: #8B7E6E;  --border: #E6DDD0;  --bg: #FDF5E8;
  --radius: 14px;  --shadow: 0 2px 12px rgba(60, 40, 20, 0.06);
}
```

差异仅在于 accent 色：口算 `#E8A317`（暖橙），英语 `#4A90D9`（蓝色）。

**打印设计**（两文件共用）：
- `@media print` 隐藏控件，只显示题目纸
- 每页 267mm × 210mm（A4），`@page { size: A4 portrait; margin: 6mm }`
- 打印时 `filter: grayscale(100%)`

**偏好持久化**（两文件各自）：
- 口算：`localStorage` 键 `oralMath_prefs`
- 英语：`localStorage` 键 `englishDictation_prefs`

## 工作约定

- **纯静态**：不引入 node.js/npm/ES module — 所有代码浏览器原生可运行
- **先改设计文档，再改代码**：功能改动前先更新 `docs/plans/` 中的设计文档
- **目视验证**：修改后必须在浏览器实地检查排版和打印效果
- **数据溯源**：新增年级/题型/单词数据必须标注来源和教材版本年份
- **历史文件不可动**：`assets/` 中的历史版本文件不得删除
- **英语教材版本**：译林版 **2024 新版**（三年级起点），与旧版单元主题/词汇完全不同
- 项目不是 git 仓库，没有版本控制
