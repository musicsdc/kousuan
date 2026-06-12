# 更新日志

> 每次修改前先备份原文件到 `assets/` 目录，按 `文件名_YYYYMMDD_v序号.html` 命名。
> 回滚时将对应备份文件复制回根目录覆盖即可。

---

## 2026-06-12

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
