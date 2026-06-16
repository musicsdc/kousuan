# 更新日志

> 每次修改前先备份原文件到 `assets/` 目录，按 `文件名_YYYYMMDD_v序号.html` 命名。
> 回滚时将对应备份文件复制回根目录覆盖即可。

---

## 2026-06-16

### [v3] 题型公式优化 + 视觉统一 + 移动端预览修复

**涉及文件：**
- `kousuan.html` — 二年级公式优化、新增题型、打印标题、宽题型识别、生成数量补足
- `english.html` — 副标题、badge、手机端预览溢出修复
- `combo.html` — 容器宽度统一、header-badge 动态化、副标题
- `CLAUDE.md` — 更新目录结构和路径
- `PROGRESS.md` — 更新进度

#### 口算练习（kousuan.html）
- **二年级 100 以内加减法公式优化**：加减法各 50%，进退位 80%、不进退位 20%
- **新增二年级题型「乘加运算」**：`一位数 × 一位数 + 一位数`，乘法口诀范围内，结果在 100 以内
- **打印标题包含题型名称**：如「二年级 100以内加减、乘加运算 练习题」
- **三年级万以内加减、四五年级小数加减打印换行修复**：当单选这些题型时强制使用 4 列布局，列宽充足不换行
- **一年级 10 以内加减选 100 题数量不固定问题修复**：不重复题用完后允许重复，凑够题量

#### 英语默写（english.html）
- **副标题统一**：「选择年级与单元，一键生成可打印的英语默写纸」
- **header-badge 简化**：「译林版（2024新版）」→「译林版」
- **手机端预览溢出修复**：缩小字号、限制下划线最大宽度、单词支持自动换行、隐藏溢出

#### 精选套题（combo.html）
- **容器宽度统一**：删除 `--container-width: 1100px`，改用公共 960px，跳转不再有宽度突变
- **header-badge 动态化**：原固定「五年级·分数特训」改为根据当前选中套题动态显示
- **副标题统一**：「选择套题类型，一键生成可打印的综合练习纸」

---

## 2026-06-12

### [v2] 导航统一 + CSS抽取公共文件 + Git初始化

**涉及文件：**
- `styles/common.css` — **新建**，共享CSS库
- `kousuan.html` — 引入common.css，删除重复CSS，导航文案统一
- `english.html` — 引入common.css，删除重复CSS，导航文案统一
- `combo.html` — 引入common.css，删除重复CSS，增加header-badge
- `index.html` — 卡片文案统一为"精选套题"
- `CHANGELOG.md` — 新建版本日志

#### 顶部导航统一（Task 1）
- 所有页导航链接统一为：首页 / 口算练习 / 英语默写 / **精选套题**（废弃"定制套题"）
- combo.html 新增 `.header-badge`：显示"五年级·分数特训"
- 移动端导航统一居中（`@media max-width: 700px`）

#### CSS 抽取公共文件（Task 2）
- **新建** `styles/common.css`，包含共享样式：
  - 设计令牌 `:root`（不含accent色，各页inline覆写）
  - Reset、body、容器布局
  - 顶部导航（`--container-width` 变量化：默认960px，combo页覆写1100px）
  - 按钮系统（.btn、.btn-gen、.btn-print）
  - 控制栏布局（.controls-row、.control-group）
  - 分段按钮通用规则（.grade-btn、.count-btn、.page-btn、.size-btn等）
  - 题型/单元Pills（.type-btn、.unit-btn）
  - 纸张系统（.paper、.paper-header、.paper-meta）
  - 分数竖式（.frac）
  - 共享打印规则 + 共享响应式规则
- 各页面仅保留独有的CSS（布局网格、生成器样式等）
- 之前在common.css里的规则，改一处就能同步三页

#### Git 初始化（Task 3）
- 根目录 `kousuan/` 初始化 git 仓库
- 创建 `.gitignore`（排除 OS 垃圾文件）
- 首次 commit：36个文件，包含所有项目文档和历史备份
- 移除了原来 `projects/.git` 嵌套仓库（历史已推送到 GitHub `musicsdc/kousuan`）

---

### [v1] 打印效果优化 & 套题50题模式

**涉及文件：**
- `combo.html` — 新增50题模式、打印加粗
- `kousuan.html` — 打印加粗
- `english.html` — 打印加粗、横线位置下移

**备份文件：**
- `assets/combo_20260612_v1.html`
- `assets/kousuan_20260612_v1.html`
- `assets/english_20260612_v1.html`

#### 套餐套题（combo.html）

- **新增"每题数"切换**：控制栏增加 `100题 | 50题` 分段按钮
- **50题模式（5列×10行）**：
  - 题目字号：屏幕 18px / 打印 18px
  - 答案字号：屏幕 13px / 打印 10px（明显小于题目）
  - 行间距加宽：gap 6px 14px
  - 通过 `.size-50` 类控制字号，不干扰100题模式
- **动态描述**：切换时自动更新题数和行列信息
- **打印加粗**：
  - 题目 `font-weight: 600`
  - 题号颜色 `#666666` → `#333333`
  - 分隔线 `#cccccc` → `#aaaaaa`
  - 分数横线 `0.7px` → `1px`
  - 标题 `font-weight: 800`
  - 裁切线 `#999999` → `#666666`

#### 口算练习（kousuan.html）

- **打印加粗**：
  - 题目 `font-weight: 600`
  - 题号颜色 `#666666` → `#333333`
  - 分隔线 `#cccccc` → `#aaaaaa`
  - 纸张信息 `font-weight: 500`
  - 标题 `font-weight: 800`

#### 英语默写（english.html）

- **打印加粗**（英文不加粗，避免字母糊）：
  - 英文单词 `font-weight: 400`（正常）
  - 英文打印字体优先用 `Segoe UI` / `Arial`
  - 题号颜色 `#666666` → `#333333`
  - 分隔线 `#cccccc` → `#aaaaaa`
  - 标题 `font-weight: 800`
- **横线位置下移**：
  - `.word-item` 改为 `align-items: flex-start`（顶对齐）
  - 增加 `min-height: 52px` 固定行高
  - `.blank-line` 用 `margin-top: 28px` 将横线推至文字下方

---

## 版本命名规范

- 根目录 HTML 文件为当前最新版
- `assets/` 中按 `文件名_YYYYMMDD_v序号.html` 保存历史版本
- 序号从 v1 开始递增，每次修改前先备份
- CHANGELOG.md 记录每次更新的具体内容和涉及文件
