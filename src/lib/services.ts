export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSubtitle: string;
  processSteps: string[];
  priceRange: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "hamambocegi-ilaclama",
    title: "Hamamböceği İlaçlama KKTC",
    shortTitle: "Hamamböceği",
    metaDescription:
      "Lefkoşa, Girne ve tüm KKTC'de garantili hamamböceği ilaçlama. Aynı gün müdahale, ücretsiz keşif.",
    keywords: ["hamamböceği ilaçlama", "hamambocegi ilaclama kktc"],
    heroSubtitle: "Jel ve sıvı uygulama ile kalıcı çözüm",
    processSteps: [
      "Ücretsiz keşif ve risk analizi",
      "Onaylı ilaçlarla hedefli uygulama",
      "Takip ziyareti ve garanti bilgilendirmesi",
    ],
    priceRange: "Konuta göre 150–400 EUR aralığı (keşif sonrası net fiyat)",
    faqs: [
      {
        q: "Hamamböceği ilaçlama ne kadar sürer?",
        a: "Standart daire uygulaması 45–90 dakika sürer; yoğun infestasyonda ikinci seans planlanır.",
      },
      {
        q: "Evde kalabilir miyiz?",
        a: "Uygulama sonrası 2–4 saat havalandırma önerilir; çocuk ve evcil hayvan için talimat verilir.",
      },
    ],
  },
  {
    slug: "fare-ilaclama",
    title: "Fare İlaçlama Lefkoşa ve KKTC",
    shortTitle: "Fare",
    metaDescription:
      "Profesyonel fare istasyonu ve kapan sistemleri. Lefkoşa, Girne, Gazimağusa'da acil müdahale.",
    keywords: ["fare ilaçlama", "fare ilaclama lefkosa"],
    heroSubtitle: "İstasyon + kapan + önleme programı",
    processSteps: [
      "Aktivite tespiti (dışkı, iz, gıda hasarı)",
      "Güvenli istasyon yerleşimi",
      "Kapan ve kapatma (exclusion) önerileri",
    ],
    priceRange: "200–550 EUR (alan ve istasyon sayısına göre)",
    faqs: [
      {
        q: "Fare ilaçlama kaç günde etkili olur?",
        a: "İlk 48–72 saatte aktivite düşer; tam kontrol genelde 7–14 gün içinde değerlendirilir.",
      },
      {
        q: "Evcil hayvanlar için güvenli mi?",
        a: "Kilitli istasyonlar kullanılır; evcil hayvan erişimi olmayan noktalara yerleştirilir.",
      },
    ],
  },
  {
    slug: "karinca-ilaclama",
    title: "Karınca İlaçlama Hizmeti",
    shortTitle: "Karınca",
    metaDescription: "Karınca kolonisi kaynağına inen profesyonel ilaçlama. KKTC geneli servis.",
    keywords: ["karınca ilaçlama", "karinca ilaclama"],
    heroSubtitle: "Kolon kaynağına yönelik jel uygulama",
    processSteps: ["Kolon yolu tespiti", "Jel istasyonları", "Periyodik kontrol"],
    priceRange: "120–300 EUR",
    faqs: [
      {
        q: "Karıncalar neden tekrar geliyor?",
        a: "Yalnızca görünen hattı öldürmek yeterli değildir; jel ile koloni beslenmesi kesilir.",
      },
      { q: "Mutfakta uygulama yapılır mı?", a: "Gıda alanlarında onaylı jel ve hedefli uygulama yapılır." },
    ],
  },
  {
    slug: "sivrisinek-ilaclama",
    title: "Sivrisinek İlaçlama ve Uçkun Kontrolü",
    shortTitle: "Sivrisinek",
    metaDescription: "Bahçe, site ve işletmeler için sivrisinek ilaçlama. Yaz sezonu programları.",
    keywords: ["sivrisinek ilaçlama", "sivrisinek ilaclama kktc"],
    heroSubtitle: "Sisleme ve larvisit ile mevsimlik koruma",
    processSteps: ["Üreme alanı tespiti", "Sisleme / ULV", "Periyodik yaz programı"],
    priceRange: "180–500 EUR / seans veya sezon paketi",
    faqs: [
      {
        q: "Sivrisinek ilaçlama ne sıklıkla yapılmalı?",
        a: "Yoğun bölgelerde 2–4 haftada bir yaz programı önerilir.",
      },
      { q: "Havuzlu sitelerde uygulanır mı?", a: "Evet, site yönetimi için toplu sözleşme yapılabilir." },
    ],
  },
  {
    slug: "bocek-ilaclama",
    title: "Böcek İlaçlama — Genel Haşere Kontrolü",
    shortTitle: "Böcek / Genel",
    metaDescription:
      "KKTC'nin en kapsamlı böcek ve haşere ilaçlama hizmeti. Konut, villa, restoran, otel.",
    keywords: ["böcek ilaçlama", "bocek ilaclama", "haşere ilaçlama"],
    heroSubtitle: "Tek ziyarette çoklu haşere değerlendirmesi",
    processSteps: ["Alan keşfi", "Karma uygulama planı", "Rapor ve garanti"],
    priceRange: "150–450 EUR",
    faqs: [
      { q: "Hangi böcekler dahil?", a: "Hamamböceği, karınca, gümüşçün, kene gibi yaygın haşereler değerlendirilir." },
      { q: "Acil servis var mı?", a: "Evet, 7/24 acil hat üzerinden yönlendirme yapılır." },
    ],
  },
  {
    slug: "termit-ilaclama",
    title: "Termit (White Ant) İlaçlama",
    shortTitle: "Termit",
    metaDescription: "Ahşap ve yapısal termit müdahalesi. KKTC'de uzman termit programı.",
    keywords: ["termit ilaçlama", "white ant kktc"],
    heroSubtitle: "Yapısal koruma ve bariyer uygulaması",
    processSteps: ["Hasar tespiti", "Bariyer / enjeksiyon", "Yıllık kontrol"],
    priceRange: "Projeye göre teklif (keşif zorunlu)",
    faqs: [
      { q: "Termit hasarı nasıl anlaşılır?", a: "Tünel izleri, oyulmuş ahşap ve kanatlı termit swarmları belirtidir." },
      { q: "Garanti veriliyor mu?", a: "Program tipine göre yazılı garanti sunulur." },
    ],
  },
  {
    slug: "akrep-ilaclama",
    title: "Akrep Kontrolü ve İlaçlama",
    shortTitle: "Akrep",
    metaDescription: "Akrep görüldüğünde acil müdahale. Perimeter ve iç alan uygulaması.",
    keywords: ["akrep ilaçlama", "akrep kontrolü kktc"],
    heroSubtitle: "Perimeter bariyer + iç alan hedefleme",
    processSteps: ["Risk haritası", "Perimeter uygulama", "Eğitim ve önleme"],
    priceRange: "200–400 EUR",
    faqs: [
      { q: "Akrep sokması durumunda ne yapmalıyım?", a: "Önce sağlık kuruluşuna başvurun; ardından alan ilaçlaması planlanır." },
      { q: "Bahçede uygulama yapılır mı?", a: "Taş yığınları ve nemli alanlar önceliklidir." },
    ],
  },
  {
    slug: "yilan-kontrolu",
    title: "Yılan Kontrolü ve Önleme",
    shortTitle: "Yılan",
    metaDescription: "KKTC'de yılan görülmesi durumunda güvenli yakalama ve alan önleme.",
    keywords: ["yılan kontrolü", "yilan kontrol kktc"],
    heroSubtitle: "Güvenli yakalama ve habitat düzenleme",
    processSteps: ["Tür tespiti", "Yakalama / uzaklaştırma", "Önleme önerileri"],
    priceRange: "Çağrı başına 150–350 EUR",
    faqs: [
      { q: "Zehirli yılan var mı KKTC'de?", a: "Bölgeye göre risk değişir; uzman yerinde değerlendirir." },
      { q: "Acil çıkış yapıyor musunuz?", a: "Evet, acil hat üzerinden yönlendirilir." },
    ],
  },
  {
    slug: "dezenfeksiyon",
    title: "Dezenfeksiyon ve Hijyen Uygulaması",
    shortTitle: "Dezenfeksiyon",
    metaDescription: "İşletme, okul, klinik ve konut dezenfeksiyonu. Onaylı ürünlerle ULV / yüzey.",
    keywords: ["dezenfeksiyon", "işletme dezenfeksiyon kktc"],
    heroSubtitle: "ULV sisleme ve yüzey protokolü",
    processSteps: ["Alan sınıflandırması", "Ürün ve PPE protokolü", "Sertifikalı rapor"],
    priceRange: "m² bazlı 3–8 EUR",
    faqs: [
      { q: "Ne sıklıkla yapılmalı?", a: "Sektör regülasyonuna ve risk skoruna göre planlanır." },
      { q: "Restoran için uygun mu?", a: "Evet, kapanış sonrası zamanlanmış uygulama yapılır." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
