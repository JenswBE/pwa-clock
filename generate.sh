#!/bin/bash
set -euo pipefail # http://redsymbol.net/articles/unofficial-bash-strict-mode/

echo "Building client ..."
GOARCH=wasm GOOS=js go build -o output/web/app.wasm

echo "Building static website ..."
go run .

echo "Copying static resources ..."
cp -r static/. output/

echo "Running post-processing ..."
go run ./postprocess

echo "Generation done"
