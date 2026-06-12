# 英语默写打印功能 — 实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 创建英语单词默写纸生成器 `english.html`，首期支持译林版三年级上册（2024新版），中→英模式生成可打印的默写纸。

**Architecture:** 单文件 HTML 应用，复用口算项目的设计令牌和打印框架。单词数据存储在独立 `js/wordbank.js` 文件中。控制面板选择年级/单元/模式 → 生成 A4 打印纸。

**Tech Stack:** 纯 HTML/CSS/JS（无构建工具，浏览器原生运行），Python HTTP server 部署

---

### Task 1: 创建目录结构和 wordbank.js

**Files:**
- Create: `projects/js/wordbank.js`

**Step 1: 创建 js 目录**

```bash
mkdir -p "C:/微云同步助手/82127972/kousuan/project_20260601_092940/projects/js"
```

**Step 2: 编写三年级上册单词数据**

写入 `projects/js/wordbank.js`，包含以下完整内容（2024新版译林版三年级上册 8 个单元核心词汇）：

```js
// 译林版英语单词库（2024新版，三年级起点）
// 数据来源：2024秋新译林版教材，交叉验证多个教育站点
// 仅收录核心词汇，不含 * 拓展词
var wordBank = {
  "3A": {
    label: "三年级上册",
    semester: "上册",
    grade: 3,
    units: [
      {
        unit: "Unit 1 Hello!",
        words: [
          { en: "hello", zh: "你好" },
          { en: "hi", zh: "嗨" },
          { en: "I", zh: "我" },
          { en: "am", zh: "是" },
          { en: "a", zh: "一（个）" },
          { en: "Miss", zh: "小姐，女士" },
          { en: "cat", zh: "猫" },
          { en: "Good morning.", zh: "早上好。" },
          { en: "Good afternoon.", zh: "下午好。" },
          { en: "class", zh: "同学们" },
          { en: "goodbye", zh: "再见" },
          { en: "bye", zh: "再见" }
        ]
      },
      {
        unit: "Unit 2 What's your name?",
        words: [
          { en: "what", zh: "什么" },
          { en: "is", zh: "是" },
          { en: "your", zh: "你的，你们的" },
          { en: "name", zh: "名字" },
          { en: "my", zh: "我的" },
          { en: "Nice to meet you!", zh: "很高兴认识你！" },
          { en: "too", zh: "也" },
          { en: "boy", zh: "男孩" },
          { en: "and", zh: "和，与" },
          { en: "girl", zh: "女孩" },
          { en: "Mr", zh: "先生" }
        ]
      },
      {
        unit: "Unit 3 Are you Su Hai?",
        words: [
          { en: "are", zh: "是" },
          { en: "you", zh: "你，你们" },
          { en: "no", zh: "不，不是" },
          { en: "not", zh: "不，没有" },
          { en: "yes", zh: "是，对" },
          { en: "but", zh: "但是" },
          { en: "sorry", zh: "对不起" },
          { en: "twin", zh: "双胞胎之一" },
          { en: "we", zh: "我们" },
          { en: "excuse me", zh: "对不起，打扰一下" },
          { en: "in", zh: "在……内" },
          { en: "with", zh: "和……在一起" },
          { en: "right", zh: "正确的" }
        ]
      },
      {
        unit: "Unit 4 This is my friend",
        words: [
          { en: "this", zh: "这，这个" },
          { en: "friend", zh: "朋友" },
          { en: "she", zh: "她" },
          { en: "he", zh: "他" },
          { en: "it", zh: "它" },
          { en: "good", zh: "好的" },
          { en: "have", zh: "有，持有" },
          { en: "many", zh: "许多" },
          { en: "Thank you.", zh: "谢谢你。" }
        ]
      },
      {
        unit: "Unit 5 She's my mother",
        words: [
          { en: "mother", zh: "母亲，妈妈" },
          { en: "father", zh: "父亲，爸爸" },
          { en: "dad", zh: "爸爸" },
          { en: "mum", zh: "妈妈" },
          { en: "brother", zh: "哥哥，弟弟" },
          { en: "sister", zh: "姐姐，妹妹" },
          { en: "baby", zh: "婴儿" },
          { en: "Good evening.", zh: "晚上好。" },
          { en: "look", zh: "看，瞧" },
          { en: "who", zh: "谁" },
          { en: "great", zh: "好棒的" },
          { en: "come", zh: "来" },
          { en: "meet", zh: "相识，结识" },
          { en: "family", zh: "家，家庭" },
          { en: "say", zh: "说" }
        ]
      },
      {
        unit: "Unit 6 Is he your grandpa?",
        words: [
          { en: "grandfather", zh: "祖父，外祖父" },
          { en: "grandmother", zh: "祖母，外祖母" },
          { en: "uncle", zh: "舅父，叔叔" },
          { en: "aunt", zh: "姑母，婶婶" },
          { en: "cousin", zh: "堂/表兄弟姐妹" },
          { en: "cool", zh: "酷的" },
          { en: "me", zh: "我" },
          { en: "big", zh: "大的" },
          { en: "happy", zh: "高兴的" },
          { en: "love", zh: "爱，热爱" }
        ]
      },
      {
        unit: "Unit 7 Happy Birthday!",
        words: [
          { en: "one", zh: "一" },
          { en: "two", zh: "二" },
          { en: "three", zh: "三" },
          { en: "four", zh: "四" },
          { en: "five", zh: "五" },
          { en: "six", zh: "六" },
          { en: "seven", zh: "七" },
          { en: "eight", zh: "八" },
          { en: "nine", zh: "九" },
          { en: "ten", zh: "十" },
          { en: "now", zh: "现在" },
          { en: "want", zh: "想要" },
          { en: "car", zh: "小汽车" },
          { en: "book", zh: "书" },
          { en: "ball", zh: "球" },
          { en: "cake", zh: "蛋糕" },
          { en: "some", zh: "一些" },
          { en: "toy", zh: "玩具" },
          { en: "for", zh: "给" },
          { en: "please", zh: "请" },
          { en: "here", zh: "在这里" },
          { en: "thanks", zh: "谢谢" },
          { en: "OK", zh: "好的" }
        ]
      },
      {
        unit: "Unit 8 I can do this for you",
        words: [
          { en: "can", zh: "能，会" },
          { en: "do", zh: "做，干" },
          { en: "clean", zh: "打扫" },
          { en: "table", zh: "桌子" },
          { en: "draw", zh: "画" },
          { en: "sing", zh: "唱歌" },
          { en: "dance", zh: "跳舞" },
          { en: "take pictures", zh: "拍照" },
          { en: "picture", zh: "图画，照片" },
          { en: "fox", zh: "狐狸" },
          { en: "on", zh: "在（某一天）" },
          { en: "child", zh: "儿童，小孩" },
          { en: "thing", zh: "事情" },
          { en: "of", zh: "属于（某人）" }
        ]
      }
    ]
  }
};
```

**Step 3: 验证文件存在且语法有效**

```bash
node -e "var wb = require('./project_20260601_092940/projects/js/wordbank.js'); console.log('OK:', Object.keys(wb.wordBank));"
```

或者用浏览器内嵌验证（在 english.html 中完成）。

---

### Task 2: 创建 english.html — 基础骨架和样式

**Files:**
- Create: `projects/english.html`

**Step 1: 写入 english.html 完整文件**

包括：HTML 结构 + 内联 CSS（复用 index.html 设计令牌） + JS 基础框架。

完整文件内容如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>英语默写打印</title>
<style>
  /* ====== 温暖书桌 · 设计令牌（与口算共用） ====== */
  :root {
    --paper: #FFF9F0;
    --card: #FFFFFF;
    --ink: #3B3228;
    --ink-light: #8B7E6E;
    --accent: #4A90D9;
    --accent-hover: #5BA0E9;
    --border: #E6DDD0;
    --bg: #FDF5E8;
    --radius: 14px;
    --shadow: 0 2px 12px rgba(60, 40, 20, 0.06);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', -apple-system, sans-serif;
    background: var(--bg);
    min-height: 100vh;
    padding: 40px 24px;
    display: flex;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    color: var(--ink);
  }

  .container { max-width: 960px; width: 100%; }

  /* ── Header ── */
  .header {
    background: var(--card);
    border-radius: var(--radius);
    padding: 28px 32px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
  }
  .header h1 { font-size: 24px; font-weight: 700; }
  .header p { font-size: 14px; color: var(--ink-light); margin-top: 3px; }
  .header-badge {
    font-size: 12px; font-weight: 500; color: var(--ink-light);
    background: var(--bg); padding: 6px 14px; border-radius: 20px;
    border: 1px solid var(--border);
  }

  /* ── Controls ── */
  .controls {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px 28px;
    margin-bottom: 20px;
    box-shadow: var(--shadow);
  }
  .controls-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 16px 28px;
  }
  .controls-row + .controls-row {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }
  .control-group { display: flex; flex-direction: column; gap: 6px; }
  .control-group > label {
    font-size: 11px; font-weight: 600; color: var(--ink-light);
    letter-spacing: 0.5px; text-transform: uppercase;
  }

  /* ── Segmented controls ── */
  .grade-btns { display: flex; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }
  .grade-btn {
    padding: 7px 16px; border: none; border-right: 1px solid var(--border);
    background: var(--card); font-size: 13px; font-weight: 500;
    color: var(--ink); cursor: pointer; transition: all 0.15s;
    font-family: inherit;
  }
  .grade-btn:last-child { border-right: none; }
  .grade-btn:hover { background: var(--paper); }
  .grade-btn.active { background: var(--accent); color: #FFFFFF; }

  .semester-btns { display: flex; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }
  .semester-btn {
    padding: 7px 18px; border: none; border-right: 1px solid var(--border);
    background: var(--card); font-size: 13px; font-weight: 500;
    color: var(--ink); cursor: pointer; transition: all 0.15s;
    font-family: inherit;
  }
  .semester-btn:last-child { border-right: none; }
  .semester-btn:hover { background: var(--paper); }
  .semester-btn.active { background: var(--accent); color: #FFFFFF; }

  .mode-btns { display: flex; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }
  .mode-btn {
    padding: 7px 16px; border: none; border-right: 1px solid var(--border);
    background: var(--card); font-size: 13px; font-weight: 500;
    color: var(--ink); cursor: pointer; transition: all 0.15s;
    font-family: inherit;
  }
  .mode-btn:last-child { border-right: none; }
  .mode-btn:hover { background: var(--paper); }
  .mode-btn.active { background: var(--accent); color: #FFFFFF; }

  .count-btns { display: flex; align-items: center; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }
  .count-btn, .page-btn {
    padding: 7px 14px; border: none; border-right: 1px solid var(--border);
    background: var(--card); font-size: 13px; font-weight: 500;
    color: var(--ink); cursor: pointer; transition: all 0.15s;
    font-family: inherit;
  }
  .count-btn:last-child, .page-btn:last-child { border-right: none; }
  .count-btn:hover, .page-btn:hover { background: var(--paper); }
  .count-btn.active, .page-btn.active { background: var(--accent); color: #FFFFFF; }

  .count-input {
    width: 56px; padding: 7px 8px;
    border: 1px solid var(--border); border-radius: var(--radius);
    font-size: 13px; text-align: center; font-weight: 500;
    color: var(--ink); font-family: inherit; margin-left: 6px;
    background: var(--card);
  }
  .count-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.15); }

  /* ── Unit pills ── */
  .units-grid { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
  .unit-btn {
    padding: 6px 14px; border: 1px solid var(--border); border-radius: 20px;
    background: var(--card); font-size: 13px; color: var(--ink);
    cursor: pointer; transition: all 0.15s; font-family: inherit;
  }
  .unit-btn:hover { border-color: var(--accent); color: var(--accent); }
  .unit-btn.active { background: var(--accent); border-color: var(--accent); color: #FFFFFF; }
  .select-all-btn {
    padding: 6px 12px; border: 1px dashed var(--border); border-radius: 20px;
    background: transparent; font-size: 12px; color: var(--ink-light);
    cursor: pointer; transition: all 0.15s; font-family: inherit;
  }
  .select-all-btn:hover { border-color: var(--accent); color: var(--accent); }

  /* ── Action buttons ── */
  .actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
  .print-tip { font-size: 11px; color: var(--ink-light); line-height: 1.3; max-width: 200px; }
  .btn {
    padding: 10px 26px; border: none; border-radius: 24px;
    font-size: 14px; font-weight: 600; cursor: pointer;
    transition: all 0.2s; font-family: inherit;
  }
  .btn-gen { background: var(--accent); color: #FFFFFF; }
  .btn-gen:hover { 
    background: var(--accent-hover); 
    transform: translateY(-1px); 
    box-shadow: 0 4px 16px rgba(74, 144, 217, 0.35); 
  }
  .btn-print { background: var(--ink); color: #FFFFFF; }
  .btn-print:hover { 
    background: #4A3F35; 
    transform: translateY(-1px); 
    box-shadow: 0 4px 16px rgba(59, 50, 40, 0.25); 
  }

  /* ── Paper ── */
  .paper {
    background: #FFFFFF;
    border-radius: var(--radius);
    padding: 32px 28px;
    border: 1px solid var(--border);
    margin-bottom: 20px;
    box-shadow: var(--shadow);
  }
  .paper-header {
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1.5px solid var(--ink);
  }
  .paper-header h2 { font-size: 20px; color: var(--ink); letter-spacing: 2px; font-weight: 600; }
  .paper-header .page-num { float: right; font-size: 12px; color: var(--ink-light); }
  .paper-meta { color: var(--ink-light); display: flex; justify-content: center; gap: 18px; margin-top: 8px; }
  .paper-meta .blank {
    display: inline-block; border-bottom: 1px solid var(--ink-light);
    min-width: 72px; margin-left: 2px;
  }

  /* ── Word grid ── */
  .words { display: grid; gap: 8px 16px; }
  .words.cols-3 { grid-template-columns: repeat(3, 1fr); }
  .words.cols-4 { grid-template-columns: repeat(4, 1fr); }

  .word-item {
    padding: 8px 4px;
    border-bottom: 1px dashed var(--border);
    display: flex; align-items: baseline; gap: 4px;
    font-size: 15px;
    color: var(--ink);
  }
  .word-item .idx {
    width: 28px; display: inline-flex; justify-content: flex-end;
    font-size: 11px; color: var(--ink-light); flex-shrink: 0;
  }
  .word-item .prompt {
    white-space: nowrap;
    min-width: 60px;
  }
  .word-item .blank-line {
    flex: 1;
    border-bottom: 2px solid var(--ink);
    min-width: 60px;
    margin-left: 4px;
  }

  .no-words { text-align: center; color: var(--ink-light); padding: 60px 0; }

  /* ── Multi-page ── */
  .paper-page { page-break-after: always; }

  @media print {
    body { background: #ffffff; padding: 0; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; filter: grayscale(100%); }
    .header, .controls, .btn { display: none !important; }
    .paper {
      background: #ffffff !important;
      box-shadow: none !important;
      border-radius: 0;
      padding: 16px 20px; margin: 0; border: none;
      height: 267mm; width: 210mm;
      box-sizing: border-box;
      display: flex; flex-direction: column;
      page-break-after: always;
      break-after: page;
    }
    .paper:last-child { page-break-after: auto; break-after: auto; }
    .paper-header { margin-bottom: 10px; padding-bottom: 8px; }
    .paper-header h2 { font-size: 16px; color: #1d1d1f !important; }
    .paper-header .page-num { display: none; }
    .paper-meta { font-size: 11px; gap: 14px; }
    .word-item { 
      border-bottom: 1px solid var(--border) !important; 
      break-inside: avoid; 
      padding: 6px 3px;
      font-size: 14px !important;
    }
    .words { 
      flex: 1; 
      align-content: space-between;
      display: grid !important;
      gap: 0 8px !important;
    }
    .words.cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
    .words.cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
    @page { margin: 6mm; size: A4 portrait; }
  }

  @media (max-width: 700px) {
    body { padding: 12px; }
    .header { padding: 20px; flex-direction: column; text-align: center; gap: 10px; }
    .controls { padding: 16px; }
    .controls-row .control-group { width: 100%; }
    .actions .btn { flex: 1; text-align: center; }
    .print-tip { max-width: none; white-space: normal; }
    .paper { padding: 16px; }
    .words.cols-3, .words.cols-4 { grid-template-columns: repeat(2, 1fr); }
    .paper-meta { flex-wrap: wrap; gap: 10px; }
  }
</style>
</head>
<body>

<div class="container">

  <div class="header">
    <div>
      <h1>英语默写</h1>
      <p>选择年级与单元，一键生成可打印的单词默写纸</p>
    </div>
    <div class="header-badge">译林版（2024新版）</div>
  </div>

  <div class="controls">
    <div class="controls-row">
      <div class="control-group">
        <label>年级</label>
        <div class="grade-btns" id="gradeBtns"></div>
      </div>
      <div class="control-group">
        <label>册别</label>
        <div class="semester-btns" id="semesterBtns"></div>
      </div>
    </div>
    <div class="controls-row">
      <div class="control-group">
        <label>模式</label>
        <div class="mode-btns" id="modeBtns"></div>
      </div>
    </div>
    <div class="controls-row">
      <div class="control-group" style="flex:1">
        <label>单元</label>
        <div class="units-grid" id="unitsGrid"></div>
      </div>
    </div>
    <div class="controls-row">
      <div class="control-group">
        <label>每题数</label>
        <div class="count-btns">
          <button class="count-btn" data-count="10">10</button>
          <button class="count-btn" data-count="20">20</button>
          <button class="count-btn active" data-count="30">30</button>
          <button class="count-btn" data-count="50">50</button>
          <input class="count-input" id="countInput" type="number" value="30" min="5" max="200" placeholder="自定义">
        </div>
      </div>
      <div class="control-group">
        <label>页数</label>
        <div class="count-btns">
          <button class="page-btn active" data-pages="1">1</button>
          <button class="page-btn" data-pages="2">2</button>
          <button class="page-btn" data-pages="5">5</button>
        </div>
      </div>
    </div>
    <div class="controls-row">
      <div class="actions">
        <button class="btn btn-gen" onclick="generate()">生成默写纸</button>
        <button class="btn btn-print" onclick="window.print()">打印 / PDF</button>
        <span class="print-tip">建议电脑端打印或保存为 PDF</span>
      </div>
    </div>
  </div>

  <div id="paperContainer">
    <div class="paper" id="paper">
      <div class="paper-header">
        <h2 id="paperTitle">英语默写纸</h2>
        <div class="paper-meta">
          <span>姓名: <span class="blank"></span></span>
          <span>日期: <span class="blank"></span></span>
          <span>用时: <span class="blank"></span></span>
          <span>对题: <span class="blank"></span></span>
        </div>
      </div>
      <div class="words cols-3" id="wordsContainer">
        <div class="no-words">请选择年级和单元，然后点击生成默写纸</div>
      </div>
    </div>
  </div>

</div>

<script src="js/wordbank.js"></script>
<script>
// ============ 状态 ============
var currentGrade = 3;
var currentSemester = 'A';  // 'A' = 上册, 'B' = 下册
var currentMode = 'zh2en';  // 'zh2en' | 'en2zh' | 'mix'
var currentCount = 30;
var currentPages = 1;
var activeUnitIndices = null;  // null = all selected

// ============ 工具函数 ============
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = rand(0, i);
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

// ============ 获取当前数据 ============
function getCurrentBook() {
  var key = currentGrade + currentSemester;
  return wordBank[key] || null;
}

function getSelectedWords() {
  var book = getCurrentBook();
  if (!book) return [];

  var indices = activeUnitIndices;
  if (!indices || indices.length === 0) {
    // 默认全选
    indices = book.units.map(function(_, i) { return i; });
  }

  var allWords = [];
  var seen = {};
  indices.forEach(function(i) {
    if (i >= 0 && i < book.units.length) {
      book.units[i].words.forEach(function(w) {
        var key = w.en.toLowerCase();
        if (!seen[key]) {
          seen[key] = true;
          allWords.push(w);
        }
      });
    }
  });
  return shuffle(allWords);
}

// ============ 生成 ============
function generate() {
  var book = getCurrentBook();
  var words = getSelectedWords();
  var perPage = Math.min(currentCount, words.length);
  var pages = currentPages;

  if (!book || words.length === 0) {
    document.getElementById('paperContainer').innerHTML =
      '<div class="no-words" style="padding:60px;text-align:center;">该年级暂无单词数据</div>';
    return;
  }

  // 获取选中的单元名
  var indices = activeUnitIndices;
  if (!indices || indices.length === 0) {
    indices = book.units.map(function(_, i) { return i; });
  }
  var unitNames = indices.map(function(i) { return book.units[i].unit; }).join('、');

  var title = book.label + ' 英语默写纸（' + unitNames + '）';
  var modeLabel = { zh2en: '中→英', en2zh: '英→中', mix: '混合' }[currentMode];

  var container = document.getElementById('paperContainer');
  container.innerHTML = '';

  for (var p = 0; p < pages; p++) {
    // 每页重新 shuffle
    var pageWords = shuffle(words.slice()).slice(0, perPage);

    var paper = document.createElement('div');
    paper.className = 'paper' + (p < pages - 1 ? ' paper-page' : '');

    var headerHTML =
      '<div class="paper-header">' +
        '<span class="page-num">第 ' + (p+1) + ' 页</span>' +
        '<h2>' + title + '</h2>' +
        '<div class="paper-meta">' +
          '<span>模式: ' + modeLabel + '</span>' +
          '<span>姓名: <span class="blank"></span></span>' +
          '<span>日期: <span class="blank"></span></span>' +
          '<span>用时: <span class="blank"></span></span>' +
          '<span>对题: <span class="blank"></span></span>' +
        '</div>' +
      '</div>';

    var grid = document.createElement('div');
    grid.className = 'words cols-3';

    pageWords.forEach(function(item, idx) {
      var qDiv = document.createElement('div');
      qDiv.className = 'word-item';

      var promptText, blankSide;

      if (currentMode === 'zh2en') {
        promptText = item.zh;
      } else if (currentMode === 'en2zh') {
        promptText = item.en;
      } else {
        // mix: random direction
        promptText = Math.random() < 0.5 ? item.zh : item.en;
      }

      qDiv.innerHTML = '<span class="idx">' + (idx+1) + '.</span>' +
        '<span class="prompt">' + promptText + '</span>' +
        '<span class="blank-line"></span>';
      grid.appendChild(qDiv);
    });

    paper.innerHTML = headerHTML;
    paper.appendChild(grid);
    container.appendChild(paper);
  }
}

// ============ UI 初始化 ============
function initUI() {
  // 年级按钮
  var gb = document.getElementById('gradeBtns');
  for (var g = 3; g <= 9; g++) {
    var btn = document.createElement('button');
    btn.className = 'grade-btn' + (g === currentGrade ? ' active' : '');
    btn.textContent = g + '年级';
    btn.setAttribute('data-grade', g);
    btn.onclick = (function(grade) { return function() { selectGrade(grade); }; })(g);
    gb.appendChild(btn);
  }

  // 册别按钮
  var sb = document.getElementById('semesterBtns');
  ['A', 'B'].forEach(function(sem) {
    var btn = document.createElement('button');
    btn.className = 'semester-btn' + (sem === currentSemester ? ' active' : '');
    btn.textContent = sem === 'A' ? '上册' : '下册';
    btn.setAttribute('data-semester', sem);
    btn.onclick = function() { selectSemester(sem); };
    sb.appendChild(btn);
  });

  // 模式按钮
  var mb = document.getElementById('modeBtns');
  [
    { id: 'zh2en', label: '中 → 英' },
    { id: 'en2zh', label: '英 → 中' },
    { id: 'mix', label: '混合' }
  ].forEach(function(m) {
    var btn = document.createElement('button');
    btn.className = 'mode-btn' + (m.id === currentMode ? ' active' : '');
    btn.textContent = m.label;
    btn.setAttribute('data-mode', m.id);
    btn.onclick = function() { selectMode(m.id); };
    mb.appendChild(btn);
  });

  // 题目数按钮
  document.querySelectorAll('.count-btn').forEach(function(btn) {
    btn.onclick = function() {
      document.querySelectorAll('.count-btn').forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      currentCount = parseInt(this.getAttribute('data-count'));
      document.getElementById('countInput').value = currentCount;
      generate();
    };
  });
  document.getElementById('countInput').onchange = function() {
    var v = parseInt(this.value) || 30;
    currentCount = Math.max(5, Math.min(200, v));
    this.value = currentCount;
    document.querySelectorAll('.count-btn').forEach(function(b) { b.classList.remove('active'); });
    generate();
  };

  // 页数按钮
  document.querySelectorAll('.page-btn').forEach(function(btn) {
    btn.onclick = function() {
      document.querySelectorAll('.page-btn').forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      currentPages = parseInt(this.getAttribute('data-pages'));
      generate();
    };
  });

  // 初始渲染
  renderUnits();
  loadPrefs();
  generate();
}

function selectGrade(g) {
  currentGrade = g;
  document.querySelectorAll('.grade-btn').forEach(function(b) {
    b.classList.toggle('active', parseInt(b.getAttribute('data-grade')) === g);
  });
  activeUnitIndices = null;
  renderUnits();
  generate();
  savePrefs();
}

function selectSemester(sem) {
  currentSemester = sem;
  document.querySelectorAll('.semester-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-semester') === sem);
  });
  activeUnitIndices = null;
  renderUnits();
  generate();
  savePrefs();
}

function selectMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-mode') === mode);
  });
  generate();
  savePrefs();
}

function renderUnits() {
  var grid = document.getElementById('unitsGrid');
  grid.innerHTML = '';

  var book = getCurrentBook();
  if (!book) {
    grid.innerHTML = '<span style="color:var(--ink-light);font-size:13px;">暂无数据</span>';
    return;
  }

  // 全选/全不选
  var allBtn = document.createElement('button');
  allBtn.className = 'select-all-btn';
  var allSelected = !activeUnitIndices || activeUnitIndices.length === book.units.length;
  allBtn.textContent = allSelected ? '全不选' : '全选';
  allBtn.onclick = function() {
    if (!activeUnitIndices || activeUnitIndices.length === book.units.length) {
      activeUnitIndices = [];
    } else {
      activeUnitIndices = book.units.map(function(_, i) { return i; });
    }
    renderUnits();
    generate();
    savePrefs();
  };
  grid.appendChild(allBtn);

  // 各单元
  book.units.forEach(function(u, i) {
    var btn = document.createElement('button');
    var isActive = !activeUnitIndices || activeUnitIndices.indexOf(i) >= 0;
    btn.className = 'unit-btn' + (isActive ? ' active' : '');
    btn.textContent = u.unit + ' (' + u.words.length + '词)';
    btn.onclick = function() {
      if (!activeUnitIndices) {
        activeUnitIndices = book.units.map(function(_, j) { return j; });
      }
      var idx = activeUnitIndices.indexOf(i);
      if (idx >= 0) {
        activeUnitIndices.splice(idx, 1);
      } else {
        activeUnitIndices.push(i);
        activeUnitIndices.sort();
      }
      renderUnits();
      generate();
      savePrefs();
    };
    grid.appendChild(btn);
  });
}

// ============ 偏好持久化 ============
function savePrefs() {
  try {
    var data = {
      grade: currentGrade,
      semester: currentSemester,
      mode: currentMode,
      count: currentCount,
      pages: currentPages,
      units: activeUnitIndices
    };
    localStorage.setItem('englishDictation_prefs', JSON.stringify(data));
  } catch(e) {}
}

function loadPrefs() {
  try {
    var raw = localStorage.getItem('englishDictation_prefs');
    if (!raw) return;
    var data = JSON.parse(raw);
    if (data.grade >= 3 && data.grade <= 9) currentGrade = data.grade;
    if (data.semester === 'A' || data.semester === 'B') currentSemester = data.semester;
    if (data.mode) currentMode = data.mode;
    if (data.count) currentCount = Math.max(5, Math.min(200, data.count));
    if (data.pages) currentPages = Math.min(5, data.pages);
    if (data.units) activeUnitIndices = data.units;
    // 更新 UI 按钮状态
    document.querySelectorAll('.grade-btn').forEach(function(b) {
      b.classList.toggle('active', parseInt(b.getAttribute('data-grade')) === currentGrade);
    });
    document.querySelectorAll('.semester-btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-semester') === currentSemester);
    });
    document.querySelectorAll('.mode-btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-mode') === currentMode);
    });
    document.getElementById('countInput').value = currentCount;
  } catch(e) {}
}

// 启动
initUI();
</script>
</body>
</html>
```

**Step 2: 启动服务器验证页面可访问**

```bash
cd "C:/微云同步助手/82127972/kousuan/project_20260601_092940/projects" && python -m http.server 5000 --bind 0.0.0.0
```

浏览器打开 `http://localhost:5000/english.html`。

**验证清单：**
- [ ] 页面正常加载，无 JS 报错（F12 Console 无红色错误）
- [ ] 年级按钮显示 3-9 年级，默认选中 3 年级
- [ ] 册别默认上册
- [ ] 模式默认中→英
- [ ] 8 个单元按钮显示，每单元标注词数，默认全选
- [ ] 题目数默认 30，页数默认 1
- [ ] 自动生成默写纸，显示三年级上册单词

---

### Task 3: 验证打印效果

**Step 1: 在浏览器中按 Ctrl+P 预览打印**

检查：
- [ ] 打印预览中隐藏了 header 和 controls
- [ ] 每页纸张 A4 大小（210mm × 267mm）
- [ ] 单词 3 列网格排列
- [ ] 每个单词有中文提示 + 下划线空格
- [ ] 页首显示标题、单元名、姓名/日期/用时/对题栏

**Step 2: 切换模式验证**

依次点击"英→中"和"混合"模式：
- [ ] 英→中：显示英文单词，空格填中文
- [ ] 混合：随机中英文提示
- [ ] 切换后自动重新生成

**Step 3: 切换单元验证**

取消勾选部分单元：
- [ ] 单元按钮状态正确切换
- [ ] 重新生成后单词量对应减少
- [ ] 标题中单元名正确更新

---

### Task 4: 数据校准

**Step 1: 逐单元核对单词表**

对照搜索到的 2024 新版译林版三年级上册官方单词表，逐单元检查 `wordbank.js` 中的单词：
- 是否有漏词
- 是否有错词（英文拼写、中文释义）
- 是否混入了 `*` 拓展词

**Step 2: 修正发现的差异后重新验证**

---

### Task 5: 入口整合（可选，Phase 3 提前）

在 `index.html` 顶部 header 中添加 tab 切换链接：

```html
<!-- 在 index.html 的 .header 中，h1 旁边添加 -->
<a href="english.html" style="color: var(--accent); text-decoration: none; font-size: 14px; font-weight: 500;">切换到英语默写 →</a>
```

在 `english.html` 中对称添加回口算的链接。

---
