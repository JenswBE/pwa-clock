package main

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"maps"
	"os"
	"path/filepath"
)

const pathPrefix = "output"

func main() {
	err := manifest()
	if err != nil {
		slog.Error("Failed to post-process manifest", "error", err)
		return
	}
}

func manifest() error {
	return processJSONFile("manifest.webmanifest", func(data map[string]any) error {
		maps.Copy(data, map[string]any{
			"display":                     "fullscreen",
			"orientation":                 "landscape",
			"related_applications":        json.RawMessage("[]"),
			"prefer_related_applications": false,
			"launch_handler": map[string]string{
				"client_mode": "focus-existing",
			},
			"screenshots": []map[string]string{
				{
					"src":   "assets/screenshots/screen.png",
					"sizes": "1617x1012",
					"type":  "image/png",
				},
			},
			"categories": []string{"utilities"},
			"shortcuts":  json.RawMessage("[]"),
		})
		return nil
	})
}

func processJSONFile(path string, process func(data map[string]any) error) error {
	fullPath := filepath.Join(pathPrefix, path)
	slog.Info("Post-processing file", "file", fullPath)

	// Read file content
	content, err := os.ReadFile(fullPath)
	if err != nil {
		return fmt.Errorf("failed to read file %s: %w", fullPath, err)
	}

	// Parse as JSON
	data := map[string]any{}
	err = json.Unmarshal(content, &data)
	if err != nil {
		return fmt.Errorf("failed to parse %s as JSON: %w", fullPath, err)
	}

	// Process
	err = process(data)
	if err != nil {
		return fmt.Errorf("failed to process %s: %w", fullPath, err)
	}

	// Convert back to JSON
	content, err = json.MarshalIndent(data, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal JSON %s: %w", fullPath, err)
	}

	// Write file
	err = os.WriteFile(fullPath, content, 0o644) // #nosec G306 -- Non-sensitive file will be published anyway
	if err != nil {
		return fmt.Errorf("failed to write file %s: %w", fullPath, err)
	}
	return nil
}
