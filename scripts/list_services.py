import re

with open('src/data/businessData.ts', 'r', encoding='utf-8') as f:
    b_text = f.read()

with open('src/data/loansData.ts', 'r', encoding='utf-8') as f:
    l_text = f.read()

with open('src/data/servicesCatalog.ts', 'r', encoding='utf-8') as f:
    s_text = f.read()

b_matches = re.findall(r"id:\s*'([^']+)',[\s\S]*?slug:\s*'([^']+)',[\s\S]*?category:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)'", b_text)

print('--- BUSINESS SERVICES ---')
for m in b_matches:
    print(f"slug: {m[1]} | cat: {m[2]} | title: {m[3]}")

l_matches = re.findall(r"id:\s*'([^']+)',[\s\S]*?slug:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)'", l_text)

print('\n--- LOAN SERVICES ---')
for m in l_matches:
    print(f"slug: {m[1]} | title: {m[2]}")
