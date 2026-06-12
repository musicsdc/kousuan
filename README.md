# 家庭练习纸

> 生成可打印的 A4 练习纸：口算、英语默写、定制套题。纯静态，无需构建。

## 快速启动

```bash
cd projects
python -m http.server 5000
# 浏览器打开 http://localhost:5000
```

## 页面一览

| 文件 | 用途 | 状态 |
|------|------|------|
| `index.html` | 首页（三入口卡片导航） | ✅ 稳定 |
| `kousuan.html` | 口算练习（1-6年级，~25种题型） | ✅ 已上线 v2026.05.17 |
| `english.html` | 英语默写（译林版2024新版，中英互默） | ✅ 已上线（仅3A/3B数据） |
| `combo.html` | 精选套题（五年级分数特训） | ✅ 已上线 |
| `js/wordbank.js` | 英语单词数据（3A-3B） | ⚠️ 需要补齐3B-9B |
| `styles/common.css` | 共享CSS库（设计令牌、按钮、纸张、打印规则） | ✅ 新建 |
| `assets/` | 历史版本备份、参考图片 | — |
| `CHANGELOG.md` | 更新日志 | — |

## 当前状态（2026-06-12）

### 口算（kousuan.html）
- 1-6年级共24种题型生成器（加减乘除、分数、小数、解方程、百分数、比例等）
- 打印已加粗：题目 font-weight 600，题号 #333，边框 #aaa

### 英语默写（english.html）
- 年级3-9，册别上下册，单元多选
- 三种模式：中→英 / 英→中 / 混合
- 打印：英文用西文字体、不加粗（400）；中文/题号加粗
- 单词数据仅3A上册 + 3B下册
- 横线下移留出写字空间

### 精选套题（combo.html）
- 当前仅一套：BOAI.LI 五年级分数特训
- **100题模式**（5列×20行，题目12px/答案10px）
- **50题模式**（5列×10行，题目18px/答案13px）
- 题目与答案同页，裁切线分割

### 首页（index.html）
- 三个入口卡片：口算 / 英语默写 / 精选套题
- 三色调区分：暖橙 / 蓝 / 紫

## 技术约束

- 纯静态 HTML + CSS + JS，无框架、无构建、无 npm
- 所有代码浏览器原生可运行，不支持 ES module
- Chrome/Edge 打印效果优先
- 偏好持久化：localStorage（口算: `oralMath_prefs`, 英语: `englishDictation_prefs`）

## 设计系统

共享CSS变量（三页各自内联），仅accent色不同：
- 口算（暖橙）`#E8A317`
- 英语（蓝色）`#4A90D9`
- 套题（紫色）`#7B5BA8`

## 更新规范

1. **改前先备份**：`cp file.html assets/file_YYYYMMDD_v序号.html`
2. 修改文件
3. 更新 `CHANGELOG.md` 记录改动
4. 回滚：取 `assets/` 备份覆盖根目录

## 已知问题

- 单词数据不全（仅3A/3B）
- `.btn-gen:hover` box-shadow rgba值在 common.css 中是灰色占位，各页 inline 需覆写为对应accent色
