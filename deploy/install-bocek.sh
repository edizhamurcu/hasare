#!/usr/bin/env bash
# alobocekservisi.com — nginx + systemd kurulumu (sudo gerekir)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NODE="/home/arekan/.nvm/versions/node/v20.20.2/bin"
DOMAIN="alobocekservisi.com"
SSL_DIR="/etc/nginx/ssl"
SSL_PEM="${SSL_DIR}/${DOMAIN}.pem"
SSL_KEY="${SSL_DIR}/${DOMAIN}.key"

echo "==> Production build (temiz)..."
cd "$ROOT"
export PATH="$NODE:$PATH"
rm -rf .next
set -a
source "$ROOT/.env.production"
set +a
npm run build

echo "==> SSL (${DOMAIN})..."
if [ ! -f "$SSL_PEM" ] || [ ! -f "$SSL_KEY" ]; then
  echo "⚠ ${SSL_PEM} bulunamadı."
  echo "  Cloudflare Origin Certificate indirip şu yollara kaydedin:"
  echo "    ${SSL_PEM}"
  echo "    ${SSL_KEY}"
  echo "  veya: sudo certbot certonly --nginx -d ${DOMAIN} -d www.${DOMAIN}"
  echo "  ve certbot yolunu conf içinde güncelleyin."
fi

echo "==> Nginx config..."
sudo cp "$ROOT/deploy/nginx/alobocekservisi.com.conf" "/etc/nginx/sites-available/${DOMAIN}"
sudo ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
sudo cp "$ROOT/deploy/nginx/bocek.arekansoftware.com.conf" /etc/nginx/sites-available/bocek.arekansoftware.com
sudo ln -sf /etc/nginx/sites-available/bocek.arekansoftware.com /etc/nginx/sites-enabled/bocek.arekansoftware.com
sudo cp "$ROOT/deploy/nginx/kibrishasereilaclama.com.tr.conf" /etc/nginx/sites-available/kibrishasereilaclama.com.tr
sudo ln -sf /etc/nginx/sites-available/kibrishasereilaclama.com.tr /etc/nginx/sites-enabled/kibrishasereilaclama.com.tr
sudo nginx -t
sudo systemctl reload nginx

echo "==> Systemd service..."
sudo cp "$ROOT/deploy/systemd/hasere.service" /etc/systemd/system/hasere.service
sudo systemctl daemon-reload
sudo systemctl enable hasere
sudo systemctl restart hasere

echo "==> Durum:"
sudo systemctl status hasere --no-pager -l | head -15
curl -s -o /dev/null -w "Local Next.js: %{http_code}\n" http://127.0.0.1:3020/ || true
echo "Tamam. DNS + Cloudflare sonrası: https://${DOMAIN}"
