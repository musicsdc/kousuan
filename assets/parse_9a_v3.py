#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从 9A words.txt 解析单词（CJK分割法）"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\微云同步助手\82127972\kousuan\assets\9A words.txt', 'r', encoding='utf-8-sig') as f:
    raw = f.read()

# 清理控制字符
raw = re.sub(r'[\x00-\x08\x0b-\x0c\x0e-\x1f]', '', raw)

def first_cjk(s):
    for i, ch in enumerate(s):
        code = ord(ch)
        if 0x4E00 <= code <= 0x9FFF or 0x3000 <= code <= 0x303F:
            return i
    return None

lines = raw.strip().split('\n')
units = []
current_unit = None
current_words = []

for line in lines:
    line = line.strip()
    if not line:
        continue
    m = re.match(r'^=+\s*(Unit\s+\d+)\s*=+$', line)
    if m:
        if current_unit and current_words:
            units.append({'unit': current_unit, 'words': list(current_words)})
        current_unit = m.group(1)
        current_words = []
        continue

    page = None
    pm = re.search(r'\((\d+)\)\s*$', line)
    if pm:
        page = int(pm.group(1))
        line = re.sub(r'\s*\(\d+\)\s*$', '', line).strip()

    if line.startswith('*'):
        line = line[1:].strip()

    cjk = first_cjk(line)
    if cjk is None:
        continue

    en_part = line[:cjk].strip()
    zh_part = line[cjk:].strip()

    # 找音标位置，headword在音标之前
    ipa = re.search(r'/\s*[^/]+?\s*/', en_part)
    if ipa:
        headword = en_part[:ipa.start()].strip()
    else:
        headword = en_part.strip()
        headword = re.sub(r'\s+[a-z]+\.(?:\s*[,&]?\s*[a-z]+\.)*\s*$', '', headword)

    # 清理zh
    zh_part = re.sub(r'^[\s,;&]*[a-z]+\.(?:\s*[,&]\s*[a-z]+\.)*[\s,;&]*', '', zh_part)
    zh_part = re.sub(r'[;；]\s*[a-z]+\.?(?:\s*[,&]\s*[a-z]+\.?)*', '; ', zh_part)
    zh_part = zh_part.strip()

    if headword and zh_part:
        current_words.append({'en': headword, 'zh': zh_part, 'page': page})

if current_unit and current_words:
    units.append({'unit': current_unit, 'words': list(current_words)})

# 按页码范围分配
unit_ranges = {
    'Unit 1': (0, 18), 'Unit 2': (20, 32), 'Unit 3': (35, 46), 'Unit 4': (49, 60),
    'Unit 5': (65, 76), 'Unit 6': (79, 90), 'Unit 7': (93, 104), 'Unit 8': (107, 118),
}

all_words = []
for u in units:
    for w in u['words']:
        all_words.append(w)

fixed = {uname: [] for uname in unit_ranges}
for w in all_words:
    p = w['page'] or 0
    for uname, (lo, hi) in unit_ranges.items():
        if lo <= p <= hi:
            fixed[uname].append(w)
            break

final = []
for uname in ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8']:
    fixed[uname].sort(key=lambda w: w['page'] or 0)
    final.append({'unit': uname, 'words': fixed[uname]})

total = sum(len(u['words']) for u in final)
print(f'9A: {len(final)} 单元, {total} 词')
for u in final:
    print(f'  {u["unit"]}: {len(u["words"])} 词')

bad = 0
for u in final:
    for w in u['words']:
        if re.search(r'[a-zA-Z]{2,}', w['zh']):
            print(f'  EN in ZH: {u["unit"]} | {w["en"]} | {w["zh"]}')
            bad += 1
        if re.search(r'[/]|[nv]\.\s|adj\.\s|adv\.\s|prep\.\s|conj\.\s', w['en']):
            print(f'  BAD EN: {u["unit"]} | [{w["en"]}] | {w["zh"]}')
            bad += 1
print('OK' if bad == 0 else f'{bad} issues')

# 生成
lines = []
lines.append('  "9A": {')
lines.append('    label: "九年级上册",')
lines.append('    semester: "上册",')
lines.append('    grade: 9,')
lines.append('    units: [')
for u in final:
    lines.append('      {')
    lines.append(f'        unit: "{u["unit"]}",')
    lines.append('        words: [')
    for w in u['words']:
        en_esc = w['en'].replace('\\', '\\\\').replace('"', '\\"')
        zh_esc = w['zh'].replace('\\', '\\\\').replace('"', '\\"')
        lines.append(f'          {{ en: "{en_esc}", zh: "{zh_esc}" }},')
    lines.append('        ]')
    lines.append('      },')
lines.append('    ]')
lines.append('  },')

out = r'C:\微云同步助手\82127972\kousuan\assets\wordbank_9a_v3.js'
with open(out, 'w', encoding='utf-8') as f:
    f.write('// 9A 单词数据（译林版）- v3 从TXT解析\n')
    f.write('\n'.join(lines))
    f.write('\n')
print(f'Output: {out}')
