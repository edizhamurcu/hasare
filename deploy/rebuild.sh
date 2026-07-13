#!/usr/bin/env bash
# Production rebuild — Node 20 (nvm) zorunlu; sistem node (v12) Next.js 15 çalıştırmaz.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NODE="/home/arekan/.nvm/versions/node/v20.20.2/bin"

export PATH="$NODE:$PATH"

echo "Node: $(node -v)"
cd "$ROOT"

set -a
source "$ROOT/.env.production"
set +a

rm -rf .next
npm run build

if command -v systemctl >/dev/null 2>&1 && systemctl is-enabled hasere >/dev/null 2>&1; then
  echo ""
  echo "hasere servisi yeniden başlatılıyor..."
  if systemctl restart hasere 2>/dev/null; then
    echo "✓ hasere restart OK"
  else
    echo "⚠ systemctl restart hasere başarısız — manuel: sudo systemctl restart hasere"
  fi
fi

echo ""
echo "Build OK."
echo ""
echo "Doğrulama:"
echo "  curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3020/"
