# PWA clock with offline support

Running locally:

```bash
npx @pwabuilder/cli start
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

