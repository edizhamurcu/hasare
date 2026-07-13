# GTM + GA4 + Google Ads dönüşüm kurulumu

Site tarafı hazır. `.env.production` içine ID'leri ekledikten sonra deploy edin.

## Ortam değişkenleri

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=google_verification_token
```

GTM kullanıyorsanız yalnızca `NEXT_PUBLIC_GTM_ID` yeterli (GA4 GTM içinden yönetilir).

## Site event'leri (dataLayer)

| Event | Tetikleyici |
|-------|-------------|
| `phone_click` | Her `tel:` link tıklaması |
| `whatsapp_click` | Her `wa.me` link tıklaması |
| `quote_form_submit` | `/teklif` formu gönderimi |

## GTM container adımları

1. **GA4 Configuration** tag — Measurement ID = GA4 property
2. **Custom Event** trigger'ları (3 adet):
   - Event name equals `phone_click`
   - Event name equals `whatsapp_click`
   - Event name equals `quote_form_submit`
3. Her trigger için **GA4 Event** tag:
   - `phone_click` → GA4 event adı: `generate_lead` (method: phone)
   - `whatsapp_click` → GA4 event adı: `generate_lead` (method: whatsapp)
   - `quote_form_submit` → GA4 event adı: `generate_lead` (method: quote_form)
4. **Google Ads Conversion Linking** — GA4 property ↔ Ads hesabı bağlantısı
5. GA4'te bu event'leri **Conversion** olarak işaretle
6. Google Ads → Goals → Import from GA4

## Google Ads telefon dönüşümü (ek)

Ads arayüzünde **Calls from ads** uzantısı + **Calls to a phone number on your website** (website call tracking) ayrıca kurulabilir. KKTC için birincil hedef WhatsApp + manuel tel tıklaması takibidir.
