# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

家庭练习纸是一个纯静态 Web 应用，用于生成可打印的 A4 学习练习纸。项目不使用 npm、打包器或后端服务，根目录 HTML/CSS/JS 可直接由浏览器运行。

当前主要页面：

| Page | Purpose |
| --- | --- |
| `index.html` | 首页，提供口算、英语默写、精选套题三个入口 |
| `kousuan.html` | 口算练习，1-6 年级题型生成器 |
| `english.html` | 英语默写，基于 `js/wordbank.js` 生成单词默写纸 |
| `combo.html` | 精选套题，题目页和答案页交替生成 |
| `answer.html` | 计算过程页，实验阶段 |

相关项目文档：
- `README.md`：项目简介、页面清单、教材版本
- `PROGRESS.md`：当前功能清单、待办和灵感库
- `CHANGELOG.md`：历史更新和每次变更涉及文件
- `docs/plans/`：英语默写等功能的设计/实施方案

## Common Commands

Run the site locally:

```bash
cd "C:/微云同步助手/82127972/kousuan"
python -m http.server 5000
```

Open `http://localhost:5000` in a browser. Use direct page URLs for focused checks:

```text
http://localhost:5000/kousuan.html
http://localhost:5000/english.html
http://localhost:5000/combo.html
```

There is no build step and no automated test suite. For a quick JavaScript syntax check of the external word bank:

```bash
node --check js/wordbank.js
```

For Python data-processing scripts under `assets/`, run the target script from the repository root so relative paths resolve correctly:

```bash
python assets/parse_words.py
python assets/fix_words.py
```

After UI or print-layout changes, verify manually in the browser:
1. Start `python -m http.server 5000`.
2. Open the affected page.
3. Generate the worksheet using representative controls.
4. Check screen layout and browser print preview / PDF output.

## Architecture

### Static page model

Each tool page is mostly self-contained:
- `kousuan.html` contains its own controls, question generators, rendering logic, localStorage preference handling, and page-specific styles.
- `english.html` contains UI/rendering logic but loads data from `js/wordbank.js` via a non-module deferred script.
- `combo.html` contains suite configuration, generators, answer rendering, and print page pairing in one file.
- `styles/common.css` provides shared design tokens, navigation, controls, paper layout, fraction rendering, print rules, and mobile responsive rules.

Do not introduce npm, ES modules, framework code, or a build pipeline unless the user explicitly asks for an architecture change.

### Shared design and print system

`styles/common.css` is the shared dependency for `kousuan.html`, `english.html`, and `combo.html`. It defines:
- design tokens such as `--paper`, `--card`, `--ink`, `--border`, `--container-width`
- shared header/navigation/control/button styles
- `.paper`, `.paper-header`, `.paper-meta`, `.frac`
- global print rules including A4 portrait page setup

Each page overrides only its accent color and page-specific layout in inline `<style>` blocks:
- `kousuan.html`: warm orange `--accent`
- `english.html`: blue `--accent`
- `combo.html`: purple `--accent`

Before changing `styles/common.css`, search which pages depend on the target selector because one change can affect all printable tools.

### Print layout invariant

Printed worksheets rely on `.paper` being `210mm` wide and `267mm` high with `@page { margin: 8mm; size: A4 portrait; }`. Do not change paper height to `297mm`; that causes content to overflow onto an extra page in browsers.

All pages hide controls during print and render only paper pages. Mobile responsive rules must not reduce printed column counts; `kousuan.html` has a print-specific mobile override for this reason.

### Kousuan flow

`kousuan.html` uses a `typeDefs` object grouped by grade. Each type definition has an `id`, label, and `gen()` function returning:

```js
{ html: '...', answer: '...' }
```

The generation flow is:
1. Select grade and active type IDs.
2. Generate enough questions for the selected count/pages.
3. Deduplicate primarily by generated HTML.
4. Shuffle and render into `.paper` containers using `.questions.cols-4` or `.questions.cols-5`.
5. Save preferences in localStorage key `oralMath_prefs`.

Question output often contains inline HTML for fractions and blanks, so changes to generators should be checked both on screen and in print preview.

### English dictation flow

`english.html` loads `js/wordbank.js`, which defines global `wordBank`. The data shape is:

```js
var wordBank = {
  "3A": {
    label: "三年级上册",
    semester: "上册",
    grade: 3,
    units: [
      { unit: "Unit 1 Hello!", words: [{ en: "hello", zh: "哈啰，你好" }] }
    ]
  }
};
```

The page selects grade/semester/edition, units, and mode, then emits 50 words per page (`WORDS_PER_PAGE = 50`) in textbook order. Unit dividers span both columns. Preferences use localStorage key `englishDictation_prefs`.

When modifying `js/wordbank.js`, validate that it remains parseable with `node --check js/wordbank.js` and visually inspect at least one affected grade/semester in `english.html`.

### Combo flow

`combo.html` defines available suites in the `combos` array. A combo contains metadata, column definitions, and generator functions. `generateAll()` creates exercise pages and matching answer pages, with a batch code so parents can match questions to answers.

The current production suite is `BOAI.LI` for fifth-grade fraction practice. Future suites should follow the existing combo structure rather than creating a separate framework.

### Data and assets

`assets/` contains source materials, historical backups, parsing scripts, and intermediate wordbank fragments. Treat it as provenance/history, not as production runtime except for scripts and source files intentionally referenced by scripts.

Before editing root HTML files, back up the old version into `assets/` using the existing changelog convention: `filename_YYYYMMDD_vN.html`. `CHANGELOG.md` records versioned changes and rollback pointers.

## Project-Specific Constraints

- Keep the app browser-native and static.
- For functional changes, update relevant docs in `docs/plans/`, `PROGRESS.md`, or `CHANGELOG.md` when they describe the changed behavior.
- New vocabulary data must preserve textbook source/version context; current README states 3-4 use 2024新版 and 5-6 are current/old pending upgrade.
- Do not delete historical files under `assets/` unless the user explicitly asks.
- Use root-relative workflow assumptions: Python scripts in `assets/` often rely on paths like `assets/...` and `js/wordbank.js` from repository root.
