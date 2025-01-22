#!/bin/bash

# Build client
GOARCH=wasm GOOS=js go build -o output/web/app.wasm

# Build static website
go run .

# Copy static resources
cp -r static/* output/web/

# Run post-processing
go run ./postprocess
