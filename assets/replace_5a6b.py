#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""用精校版TXT替换wordbank.js中的5A/5B/6A/6B数据"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

BASE = r'C:\微云同步助手\82127972\kousuan'
TXT_FILES = {
    '5A': '5A WORDS OLD.txt',
    '5B': '5B WORDS OLD.txt',
    '6A': '6A WORDS OLD.txt',
    '6B': '6B WORDS OLD.txt',
}
GRADE_LABELS = {
    '5A': ('五年级上册', '上册', 5),
    '5B': ('五年级下册', '下册', 5),
    '6A': ('六年级上册', '上册', 6),
    '6B': ('六年级下册', '下册', 6),
}

def first_cjk(s):
    for i, ch in enumerate(s):
        if 0x4E00 <= ord(ch) <= 0x9FFF:
            return i
    return None

def parse_txt(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    lines = content.split('\n')
    units = []
    current_unit = None
    current_words = []

    for line in lines:
        line = line.strip()
        if not line or line.startswith('*') or line.startswith('---'):
            continue
        m = re.match(r'^###\s+Unit\s+(\d+)', line)
        if m:
            if current_unit and current_words:
                units.append({'unit': f'Unit {current_unit}', 'words': list(current_words)})
            current_unit = int(m.group(1))
            current_words = []
            continue
        if current_unit is None:
            continue

        cjk = first_cjk(line)
        if cjk is None:
            continue
        # 从CJK往前找最后一个空格
        split_at = line.rfind(' ', 0, cjk)
        if split_at == -1:
            split_at = cjk
        en = line[:split_at].strip()
        zh = line[split_at:].strip()
        if en and zh:
            current_words.append({'en': en, 'zh': zh})

    if current_unit and current_words:
        units.append({'unit': f'Unit {current_unit}', 'words': list(current_words)})
    return units

def to_js_fragment(grade, units):
    label, semester, grade_num = GRADE_LABELS[grade]
    lines = []
    lines.append(f'  "{grade}": {{')
    lines.append(f'    label: "{label}",')
    lines.append(f'    semester: "{semester}",')
    lines.append(f'    grade: {grade_num},')
    lines.append('    units: [')
    for u in units:
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
    return '\n'.join(lines)

# 解析所有TXT
fragments = {}
for grade, fname in TXT_FILES.items():
    filepath = f'{BASE}/assets/{fname}'
    units = parse_txt(filepath)
    total = sum(len(u['words']) for u in units)
    fragments[grade] = to_js_fragment(grade, units)
    print(f'{grade}: {len(units)} 单元, {total} 词')

# 读取 wordbank.js
with open(f'{BASE}/js/wordbank.js', 'r', encoding='utf-8') as f:
    bank = f.read()

# 逐个替换每个年级
for grade in ['5A', '5B', '6A', '6B']:
    # 找grade块
    start = bank.find(f'"{grade}":')
    if start == -1:
        print(f'错误: 找不到 {grade}')
        continue

    # 匹配大括号
    depth = 0
    in_block = False
    i = start
    end = start
    while i < len(bank):
        if bank[i] == '{':
            depth += 1
            in_block = True
        elif bank[i] == '}':
            depth -= 1
            if in_block and depth == 0:
                end = i + 1
                break
        i += 1

    # 看后面有没有逗号
    if end < len(bank) and bank[end] == ',':
        end += 1

    # 替换
    old_len = end - start
    new_frag = fragments[grade].rstrip(',\n')
    bank = bank[:start] + new_frag + bank[end:]
    print(f'{grade}: 替换 {old_len} → {len(new_frag)} 字符')

# 修复可能的语法问题
bank = bank.replace('},,', '},')

with open(f'{BASE}/js/wordbank.js', 'w', encoding='utf-8') as f:
    f.write(bank)

print(f'\n完成: {len(bank)} 字符')
