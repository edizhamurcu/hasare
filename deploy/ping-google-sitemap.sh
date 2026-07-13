#!/usr/bin/env bash
# Google Search Console — sitemap gönderimi (ping API 2023'te kaldırıldı)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
set -a
source "$ROOT/.env.production" 2>/dev/null || true
set +a

SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://alobocekservisi.com}"
SITEMAP="${SITE_URL}/sitemap.xml"

echo "Kanonik site: ${SITE_URL}"
echo "Sitemap:      ${SITEMAP}"
echo ""
echo "Google Search Console adımları:"
echo "  1. Mülk ekle → URL öneki: ${SITE_URL}"
echo "  2. HTML etiket doğrulama → .env.production NEXT_PUBLIC_GSC_VERIFICATION"
echo "  3. Sitemaps → Yeni sitemap ekle: sitemap.xml"
echo "  4. URL Denetimi → ana sayfa + /teklif + önemli hizmet URL'leri"
echo ""
echo "GEO: ${SITE_URL}/llms.txt dosyasını AI indeksleme için referans alın."
