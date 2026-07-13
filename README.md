# Hasere — KKTC İlaçlama (Next.js 15)

Dönüşüm ve Local SEO odaklı KKTC haşere ilaçlama web uygulaması. Plan detayı: [`docs/PROJE_PLANI.md`](docs/PROJE_PLANI.md).

## Kurulum

```bash
cd /home/arekan/hasere
cp .env.example .env.local
export PATH="/home/arekan/.nvm/versions/node/v20.20.2/bin:$PATH"
npm install
npm run dev
```

Tarayıcı: **http://localhost:3020** (port 3000 başka projede kullanılıyor olabilir)

**Production:** https://alobocekservisi.com (`NEXT_PUBLIC_SITE_URL` — `.env.production`)

### Internal Server Error görürseniz

```bash
npm run dev:clean
# veya kararlı test için:
npm run start:prod
```

Sunucuyu `0.0.0.0:3020` üzerinde dinler; aynı ağdan `http://SUNUCU_IP:3020` ile erişilebilir.

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme (Turbopack) |
| `npm run build` | Üretim derlemesi |
| `npm run start` | Üretim sunucusu |
| `npm run lint` | ESLint |

## Sayfa haritası

- `/` — Ana sayfa, strateji özeti, CTA
- `/hizmetler` — Hizmet listesi
- `/hizmetler/[slug]` — SEO hizmet sayfaları
- `/bolgeler` — Şehir listesi
- `/bolgeler/[slug]` — Local SEO landing
- `/teklif` — Keşif talebi (WhatsApp MVP)
- `/blog` — İçerik planı (MDX sonraki sprint)

## Cloudflare (sonraki adım)

1. GitHub/GitLab repo bağlayın
2. Cloudflare Pages → Next.js preset veya `@cloudflare/next-on-pages`
3. Ortam değişkenlerini panelden `NEXT_PUBLIC_*` olarak ekleyin

## Lisans

Özel proje — müşteri markası ve içerikler `.env` ile yapılandırılır.
