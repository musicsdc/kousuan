#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""9A单词解析v4 - 精确CJK分割"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

# 读取v2脚本中嵌入的raw数据
with open(r'C:\微云同步助手\82127972\kousuan\assets\parse_9a_v2.py', 'r', encoding='utf-8') as f:
    v2_text = f.read()

m = re.search(r'raw = r"""(.+?)"""', v2_text, re.DOTALL)
raw = m.group(1)

# 清理控制字符（保留换行和制表符）
raw = re.sub(r'[\x00-\x08\x0b-\x0c\x0e-\x1f]', '', raw)

def first_cjk(s):
    for i, ch in enumerate(s):
        if 0x4E00 <= ord(ch) <= 0x9FFF:
            return i
    return None

POS_ALL = r'(?:n\.|v\.|vt\.|vi\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|num\.|abbr\.|aux\.|art\.|int\.|exclam\.|linking\s+v\.|predet\.)'
POS_CHAIN = POS_ALL + r'(?:\s*(?:[,&]|and)\s*' + POS_ALL + r')*'

lines = raw.strip().split('\n')
units = []
current_unit = None
current_words = []

for line in lines:
    line = line.strip()
    if not line:
        continue
    # 单元标题
    if re.match(r'^=+\s*Unit\s+\d+\s*=+$', line):
        if current_unit and current_words:
            units.append((current_unit, current_words))
        current_unit = re.search(r'Unit\s+\d+', line).group()
        current_words = []
        continue
    if current_unit is None:
        continue

    # 页码
    page = None
    pm = re.search(r'\((\d+)\)\s*$', line)
    if pm:
        page = int(pm.group(1))
        line = re.sub(r'\s*\(\d+\)\s*$', '', line).strip()
    # *
    if line.startswith('*'):
        line = line[1:].strip()

    cjk = first_cjk(line)
    if cjk is None:
        continue

    en_part = line[:cjk].strip()
    zh_part = line[cjk:].strip()

    # Extract headword: everything before /phonetic/
    ipa = re.search(r'/[^/]+/', en_part)
    if ipa:
        headword = en_part[:ipa.start()].strip()
    else:
        # No phonetic: strip trailing POS
        headword = re.sub(r'\s+' + POS_CHAIN + r'\s*$', '', en_part)

    # Clean zh: remove leading POS, and POS after semicolons
    zh_part = re.sub(r'^[\s,;&]*' + POS_CHAIN + r'[\s,;&]*', '', zh_part)
    zh_part = re.sub(r'[;；]\s*' + POS_CHAIN, '; ', zh_part)
    zh_part = zh_part.strip()

    if headword and zh_part:
        current_words.append({'en': headword, 'zh': zh_part, 'page': page})

if current_unit and current_words:
    units.append((current_unit, current_words))

# 按页码范围重新分配
ranges = {
    'Unit 1': (0,18), 'Unit 2': (20,32), 'Unit 3': (35,46), 'Unit 4': (49,60),
    'Unit 5': (65,76), 'Unit 6': (79,90), 'Unit 7': (93,104), 'Unit 8': (107,118),
}

all_words = []
for uname, words in units:
    for w in words:
        all_words.append(w)

fixed = {k: [] for k in ranges}
for w in all_words:
    p = w.get('page') or 0
    for uname, (lo, hi) in ranges.items():
        if lo <= p <= hi:
            fixed[uname].append(w)
            break

final = []
for uname in ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5','Unit 6','Unit 7','Unit 8']:
    fixed[uname].sort(key=lambda w: w.get('page') or 0)
    total_n = len(fixed[uname])
    final.append({'unit': uname, 'words': [{'en': w['en'], 'zh': w['zh']} for w in fixed[uname]]})
    print(f'{uname}: {total_n} 词')

total = sum(len(u['words']) for u in final)
print(f'Total: {total}')

# 验证
bad = 0
for u in final:
    for w in u['words']:
        en, zh = w['en'], w['zh']
        if re.search(r'[a-zA-Z]{2,}', zh):
            print(f'  ZH has EN: [{en}] [{zh}]')
            bad += 1
        if re.search(r'[/]|[nv]\.|adj\.|adv\.|prep\.|conj\.|pron\.', en):
            print(f'  EN dirty: [{en}] [{zh}]')
            bad += 1
print('OK' if bad == 0 else f'{bad} issues')

# 生成JS
lines_out = ['  "9A": {', '    label: "九年级上册",', '    semester: "上册",', '    grade: 9,', '    units: [']
for u in final:
    lines_out.append('      {')
    lines_out.append(f'        unit: "{u["unit"]}",')
    lines_out.append('        words: [')
    for w in u['words']:
        en = w['en'].replace('\\', '\\\\').replace('"', '\\"')
        zh = w['zh'].replace('\\', '\\\\').replace('"', '\\"')
        lines_out.append(f'          {{ en: "{en}", zh: "{zh}" }},')
    lines_out.append('        ]')
    lines_out.append('      },')
lines_out.append('    ]')
lines_out.append('  },')

out = r'C:\微云同步助手\82127972\kousuan\assets\wordbank_9a_v4.js'
with open(out, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines_out) + '\n')
print(f'Output: {out}')
