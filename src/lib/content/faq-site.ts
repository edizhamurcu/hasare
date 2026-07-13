import type { Locale } from "@/i18n/config";

export type FaqItem = { q: string; a: string };

const faqsByLocale: Record<Locale, FaqItem[]> = {
  tr: [
    {
      q: "Teklif nasıl alınır?",
      a: "Alan, haşere türü ve uygulama yöntemine göre ücretsiz keşif sonrası yazılı teklif verilir. Web sitemizde fiyat yayınlanmaz.",
    },
    {
      q: "Ücretsiz keşif var mı?",
      a: "Evet. Keşif ve ön değerlendirme ücretsizdir; ardından yazılı teklif ve uygulama planı paylaşılır.",
    },
    {
      q: "Hangi bölgelere servis veriyorsunuz?",
      a: "Lefkoşa merkezli ekip ile Girne, Gazimağusa, İskele, Güzelyurt, Lefke ve KKTC genelinde hizmet verilir.",
    },
    {
      q: "Acil ilaçlama ve 7/24 hizmet var mı?",
      a: "Evet. Acil hat üzerinden aynı gün veya acil yönlendirme yapılabilir.",
    },
    {
      q: "Standart teklifte hangi haşereler var, hangileri yok?",
      a: "Aylık yüzey sprey programında karınca, fare, hamamböceği türleri, örümcek, gümüşçün vb. dahildir. Sivrisinek ULV, termit, tahta kurusu, pire ve kene için ayrı teklif hazırlanır — /teklif sayfasındaki kapsam özetine bakın.",
    },
    {
      q: "Aylık sözleşmede acil müdahale ücretli mi?",
      a: "Sözleşme kapsamındaki türler için beklenmeyen acil durumlarda 24 saat içinde ücretsiz müdahale sağlanır.",
    },
    {
      q: "İlaçlama evcil hayvan ve çocuklar için güvenli mi?",
      a: "Bayer Çevre Bilimleri ürünleri ile kokusuz ve leke bırakmayan uygulama hedeflenir. Havalandırma ve bekleme süreleri yazılı bildirilir.",
    },
    {
      q: "Garanti veya tekrar müdahale var mı?",
      a: "Hizmet türüne göre garanti koşulları sözleşmede belirtilir; sorun devam ederse ücretsiz kontrol mümkündür.",
    },
    {
      q: "Kurumsal işletmeler için rapor veriliyor mu?",
      a: "Evet. Restoran, okul, hastane ve fabrika uygulamalarında rapor ve evrak teslimi yapılabilir.",
    },
  ],
  en: [
    {
      q: "How do I get a quote?",
      a: "After a free inspection, a written quote is based on area, pest type and treatment method. No prices are published on the website.",
    },
    {
      q: "Is the inspection free?",
      a: "Yes. Inspection and initial assessment are free; you then receive a written quote and treatment plan.",
    },
    {
      q: "Which areas do you cover?",
      a: "Nicosia-based teams serve Kyrenia, Famagusta, Iskele, Güzelyurt, Lefke and all of Northern Cyprus.",
    },
    {
      q: "Do you offer 24/7 emergency service?",
      a: "Yes. Same-day or urgent dispatch is available via our emergency line.",
    },
    {
      q: "What is included in the standard quote?",
      a: "Monthly surface-spray contracts cover ants, rodents, common cockroaches, spiders, silverfish, etc. Mosquito ULV, termites, bed bugs, fleas and ticks need a separate quote — see /teklif.",
    },
    {
      q: "Is urgent treatment free on a monthly contract?",
      a: "Unexpected in-scope pest issues receive free intervention within 24 hours.",
    },
    {
      q: "Is treatment safe for pets and children?",
      a: "Bayer Environmental Science products; low-odour, non-staining application. Written re-entry guidance provided.",
    },
    {
      q: "Is there a warranty or callback?",
      a: "Warranty terms are stated in your agreement; free checks may apply if problems persist.",
    },
    {
      q: "Do you provide reports for businesses?",
      a: "Yes. Documentation and reports are available for restaurants, schools, hospitals and industrial sites.",
    },
  ],
  ru: [
    {
      q: "Как получить предложение?",
      a: "После бесплатного осмотра письменное предложение зависит от площади, вида вредителя и метода. На сайте цены не публикуются.",
    },
    {
      q: "Осмотр бесплатный?",
      a: "Да. Осмотр и первичная оценка бесплатны, затем вы получаете письменное предложение и план работ.",
    },
    {
      q: "Какие районы обслуживаются?",
      a: "База в Лефкоше; выезды в Girne, Gazimağusa, İskele, Güzelyurt, Lefke и по всему KKTC.",
    },
    {
      q: "Есть срочный выезд 24/7?",
      a: "Да. Возможен выезд в тот же день или срочная диспетчеризация.",
    },
    {
      q: "Что входит в стандартное предложение?",
      a: "Ежемесячное распыление: муравьи, грызуны, тараканы, пауки и др. ULV от комаров, термиты, клопы — отдельный расчёт. См. /teklif.",
    },
    {
      q: "Срочный выезд по договору платный?",
      a: "По договору — бесплатный выезд в течение 24 ч при неожиданных случаях в рамках перечня.",
    },
    {
      q: "Безопасно ли для детей и животных?",
      a: "Препараты Bayer; малозапахные. Сроки проветривания — письменно.",
    },
    {
      q: "Есть гарантия?",
      a: "Условия гарантии указываются в договоре; при сохранении проблемы возможен бесплатный контрольный визит.",
    },
    {
      q: "Предоставляете отчёты для бизнеса?",
      a: "Да. Отчёты и документы для ресторанов, школ, больниц и промышленных объектов.",
    },
  ],
};

export function getSiteFaqs(locale: Locale): FaqItem[] {
  return faqsByLocale[locale] ?? faqsByLocale.tr;
}

export function getFooterFaqPreview(locale: Locale): FaqItem[] {
  return getSiteFaqs(locale).slice(0, 3);
}
