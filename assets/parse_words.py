import re, json

def parse_words(filepath):
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        lines = f.readlines()

    units = []
    current_unit = None
    current_words = []
    pending_en = None

    for raw_line in lines:
        line = raw_line.strip()
        if not line:
            if pending_en:
                current_words.append({'en': pending_en.strip(), 'zh': ''})
            pending_en = None
            continue

        um = re.match(r'^Unit\s+(\d+)', line)
        if um:
            if pending_en:
                current_words.append({'en': pending_en, 'zh': ''})
            if current_unit and current_words:
                units.append({'unit': current_unit, 'words': list(current_words)})
            current_unit = 'Unit ' + um.group(1)
            current_words = []
            pending_en = None
            continue

        if not current_unit:
            continue

        # Continuation line: Chinese only (deferred word's meaning)
        if pending_en and not re.search(r'[a-zA-Z]{2,}', line):
            zh = re.sub(r'\s*\(\d+\)', '', line).strip()
            if zh:
                current_words.append({'en': pending_en, 'zh': zh})
            elif pending_en:  # Even without Chinese, keep the word
                current_words.append({'en': pending_en, 'zh': ''})
            pending_en = None
            continue

        # Expansion word check
        is_exp = line.startswith('*')
        clean = line[1:].strip() if is_exp else line

        # Try to split into English part and Chinese part
        # Look for the first Chinese character or CJK punctuation
        split_idx = None
        for i, ch in enumerate(clean):
            if '一' <= ch <= '鿿' or '　' <= ch <= '〿':
                split_idx = i
                break

        if split_idx is not None:
            en = clean[:split_idx].strip()
            zh = re.sub(r'\s*\(\d+\)', '', clean[split_idx:]).strip()
        else:
            # No Chinese on this line - might be deferred
            match = re.match(r'^(\*?)([a-zA-Z][a-zA-Z\s\-\']*)$', clean)
            if match:
                pending_en = (match.group(1) + match.group(2)).strip()
            if match and not is_exp:
                pending_en = match.group(1).strip()
            continue

        if is_exp:
            # Include expansion words (marked with *)
            if en:
                current_words.append({'en': en, 'zh': zh})
            pending_en = None
            continue

        if en:
            current_words.append({'en': en, 'zh': zh})
            pending_en = None

    if pending_en:
        current_words.append({'en': pending_en, 'zh': ''})
    if current_unit and current_words:
        units.append({'unit': current_unit, 'words': list(current_words)})

    return units

units_5a = parse_words('assets/26五上.txt')
units_6a = parse_words('assets/26秋 六上 conv.txt')

for name, units in [('5A-new', units_5a), ('6A-new', units_6a)]:
    print(f"\n{name}: {len(units)} units")
    total = 0
    for u in units:
        print(f"  {u['unit']}: {len(u['words'])} words")
        total += len(u['words'])
    print(f"  Total: {total}")

data = {'5A-new': units_5a, '6A-new': units_6a}
with open('temp_new_words.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("\nSaved!")
