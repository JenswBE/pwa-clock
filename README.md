# PWA clock with offline support

## Running locally with auto-regenerate

```bash
# Install from https://github.com/watchexec/watchexec
watchexec ./generate.sh

cd output && python3 -m http.server
```

## Generate APK

Note to self: See Bitwarden for `signing.keystore`

```bash
cd generate_apk
alias bubblewrap_container='podman run --rm -ti -v .:/app:z ghcr.io/googlechromelabs/bubblewrap:latest'

# Only needed once for init
bubblewrap_container init --manifest https://clock.jensw.be/manifest.json

# Update apk
bubblewrap_container merge
bubblewrap_container update
bubblewrap_container build
# Ensure assetlinks.json is up-to-date if signing key changes!
```
