# Hasere — KKTC İlaçlama (Next.js 15)

Dönüşüm ve Local SEO odaklı KKTC haşere ilaçlama web uygulaması. Plan detayı: [`docs/PROJE_PLANI.md`](docs/PROJE_PLANI.md).

## Kurulum

```bash
cd /home/arekan/hasere
cp .env.example .env.local
# .env.local içinde telefon, domain ve GA4/GTM değerlerini düzenleyin
export PATH="/home/arekan/.nvm/versions/node/v20.20.2/bin:$PATH"
npm install
npm run dev
```

Tarayıcı: [http://localhost:3000](http://localhost:3000)

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
