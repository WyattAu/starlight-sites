#!/bin/bash
set -e
cd "$(dirname "$0")/.."

echo "Building WASM widgets..."
wasm-pack build --target web --release --out-dir pkg 2>&1

# Output goes to public/wasm/ in each site that uses widgets
TARGET="../../shared/public/wasm"
mkdir -p "$TARGET"
cp pkg/starlight_widgets.js pkg/starlight_widgets_bg.wasm "$TARGET/"
echo "WASM artifacts copied to $TARGET"
echo "Done."
