#!/usr/bin/env python3
"""Fix all site astro.config.mjs to pass remarkMath/rehypeKatex to mdx() integration."""

import re
import os
import glob

def fix_astro_config(filepath):
    """Add remarkMath/rehypeKatex to mdx() integration call."""
    content = open(filepath).read()
    
    # Check if mdx() already has options
    if re.search(r'mdx\s*\(\s*\{', content):
        return False  # Already has options
    
    # Replace mdx() with mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] })
    new_content = re.sub(
        r'mdx\(\)',
        'mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] })',
        content
    )
    
    if new_content != content:
        open(filepath, 'w').write(new_content)
        return True
    return False

# Process all site configs
configs = glob.glob('sites/*/astro.config.mjs')
changed = 0
for f in sorted(configs):
    if fix_astro_config(f):
        print("Fixed: " + f)
        changed += 1

print("Total changed: " + str(changed))
