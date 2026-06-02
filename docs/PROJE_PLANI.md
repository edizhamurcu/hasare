# KKTC Haşere İlaçlama — Gelişmiş Proje Planı

Bu doküman, `kktc_ilaclama_proje_plani.html` ve sohbet analizinin birleştirilmiş, uygulama seviyesinde genişletilmiş halidir.

## Hedef

KKTC'de **böcek ilaçlama**, **haşere ilaçlama**, **fare ilaçlama**, **sivrisinek ilaçlama** ve şehir + haşere long-tail aramalarında **ilk sayfa** + yüksek dönüşüm.

## Mevcut site teşhisi (özet)

| Güçlü | Zayıf |
|-------|-------|
| Hizmet sayfaları ayrılmış | CTA agresif değil |
| Telefon görünür | Local SEO (şehir LP) yok |
| Bölgeler belirtilmiş | Blog güncellenmiyor |
| İçerik hacmi var | Güven unsurları eksik |
| | Tasarım 2017 broşür mantığı |

## Pazarlama karması (2026)

- **%40 Google Ads** — ilk haftadan lead
- **%40 Local SEO** — şehir LP + Google Business
- **%20 AI SEO** — SSS, Schema, süreç, fiyat aralığı metinleri

## Teknik yığın (bu repo)

| Katman | Seçim |
|--------|--------|
| Framework | Next.js 15 App Router, SSR/SSG |
| Dil | TypeScript |
| Stil | Tailwind CSS 3 |
| SEO | `metadata`, `sitemap.xml`, `robots.txt`, JSON-LD |
| Analitik | GA4 + GTM (env) |
| Deploy hedefi | Cloudflare Pages / Workers (Wrangler) |
| Mesajlaşma | WhatsApp deep link (API sonraki faz) |

## URL mimarisi (uygulandı)

### Hizmetler (`/hizmetler/[slug]`)

- hamambocegi-ilaclama, fare-ilaclama, karinca-ilaclama, sivrisinek-ilaclama
- bocek-ilaclama, termit-ilaclama, akrep-ilaclama, yilan-kontrolu, dezenfeksiyon

### Şehirler (`/bolgeler/[slug]`)

- lefkosa-bocek-ilaclama, girne-bocek-ilaclama, gazimagusa-bocek-ilaclama
- iskele-bocek-ilaclama, guzelyurt-bocek-ilaclama, lefke-bocek-ilaclama

## Google Ads başlangıç

**Anahtar kelimeler:** böcek ilaçlama, haşere ilaçlama, fare ilaçlama, sivrisinek ilaçlama, hamamböceği ilaçlama, ilaçlama şirketi, böcekçi, acil ilaçlama

**Negatifler:** ilaç fiyatı, böcek ilacı satın al, evde ilaç yapımı, ücretsiz

**Bütçe:** günlük 10–20 EUR (aylık 300–600 EUR); rekabet artışında 800–1500 EUR/ay

Her kampanya grubu → ilgili landing URL (kalite puanı).

## Sprint yol haritası

### Sprint 1 (tamamlandı — iskelet)

- [x] Next.js proje iskeleti
- [x] Ana sayfa hero + üçlü CTA
- [x] 9 hizmet + 6 şehir sayfası
- [x] Schema.org (Service, FAQ, PestControlService)
- [x] Sitemap / robots

### Sprint 2

- [ ] `.env.local` gerçek telefon, lisans, domain
- [ ] Google Business Profile + yorum embed
- [ ] Önce/sonra galeri (`public/cases/`)
- [ ] OG görselleri (`opengraph-image.tsx`)

### Sprint 3

- [ ] Blog MDX + editorial calendar
- [ ] Teklif API (Resend / Formspree) + conversion events GTM
- [ ] Cloudflare Pages deploy + `wrangler.toml`
- [ ] WhatsApp Business API (opsiyonel)

### Sprint 4

- [ ] Çok dilli (TR + EN) hreflang
- [ ] A/B hero metinleri
- [ ] Search Console + Ads dönüşüm import

## AI arama optimizasyonu (sayfa şablonu)

Her hizmet/bölge sayfasında:

1. Net H1 + lokasyon
2. 3 adımlı süreç
3. Fiyat aralığı (keşif şartı ile)
4. En az 2 SSS + `FAQPage` schema
5. `Service` / `PestControlService` JSON-LD

## Güven unsurları checklist

- [ ] Sağlık Bakanlığı lisans no (footer + schema)
- [ ] Yetki belgesi PDF linki
- [ ] Önce/sonra 6+ görsel
- [ ] 10+ Google yorumu (widget)
- [ ] Kurumsal logo bandı

---

*Son güncelleme: proje bootstrap — `/home/arekan/hasere`*
