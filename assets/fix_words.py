import json

with open('temp_new_words.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('js/wordbank.js', 'r', encoding='utf-8') as f:
    content = f.read()

def esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")

def gen_entry(key, label, semester, grade, units, edition):
    lines = []
    lines.append('  "' + key + '": {')
    lines.append('    label: "' + label + '",')
    lines.append('    semester: "' + semester + '",')
    lines.append('    grade: ' + str(grade) + ',')
    lines.append('    edition: "' + edition + '",')
    lines.append('    units: [')
    for u in units:
        lines.append('        {')
        lines.append('            unit: "' + u['unit'] + '",')
        lines.append('            words: [')
        for w in u['words']:
            e = esc(w['en'])
            z = esc(w['zh'])
            lines.append('                { en: "' + e + '", zh: "' + z + '" },')
        lines.append('            ]')
        lines.append('        },')
    lines.append('    ]')
    lines.append('  },')
    return '\n'.join(lines)

new_5a = gen_entry('5A-new', '五上（2026新版）', '上册', 5, data['5A-new'], 'new')
new_6a = gen_entry('6A-new', '六上（2026新版）', '上册', 6, data['6A-new'], 'new')

# Mark existing as old
content = content.replace(
    '\n  "5A": {\n    label: "五年级上册",\n    semester: "上册",\n    grade: 5,',
    '\n  "5A": {\n    label: "五上（旧版）",\n    semester: "上册",\n    grade: 5,\n    edition: "old",')
content = content.replace(
    '\n  "6A": {\n    label: "六年级上册",\n    semester: "上册",\n    grade: 6,',
    '\n  "6A": {\n    label: "六上（旧版）",\n    semester: "上册",\n    grade: 6,\n    edition: "old",')
content = content.replace(
    '\n  "5B": {\n    label: "五年级下册",\n    semester: "下册",\n    grade: 5,',
    '\n  "5B": {\n    label: "五年级下册",\n    semester: "下册",\n    grade: 5,\n    edition: "old",')
content = content.replace(
    '\n  "6B": {\n    label: "六年级下册",\n    semester: "下册",\n    grade: 6,',
    '\n  "6B": {\n    label: "六年级下册",\n    semester: "下册",\n    grade: 6,\n    edition: "old",')

end_pos = content.rfind('};')
content = content[:end_pos] + ',\n' + new_5a + '\n' + new_6a + '\n' + content[end_pos:]

with open('js/wordbank.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done!")
