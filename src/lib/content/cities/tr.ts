export type CityLanding = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  neighborhoods: string[];
  intro: string;
  faqs: { q: string; a: string }[];
};

export const cities: CityLanding[] = [
  {
    slug: "lefkosa-bocek-ilaclama",
    name: "Lefkoşa",
    title: "Lefkoşa Böcek ve Haşere İlaçlama",
    metaDescription:
      "Lefkoşa'da aynı gün böcek ilaçlama, fare ve hamamböceği müdahalesi. Ücretsiz keşif, 7/24 acil hat.",
    keywords: ["lefkosa böcek ilaçlama", "lefkosa bocek ilaclama", "fare ilaçlama lefkosa"],
    neighborhoods: ["Gönyeli", "Hamitköy", "Kızılbaş", "Taşkınköy", "Yenişehir"],
    intro:
      "Lefkoşa merkez ve çevre mahallelerde konut, işyeri ve site yönetimleri için hızlı müdahale ekibimizle hizmet veriyoruz.",
    faqs: [
      { q: "Lefkoşa'da aynı gün servis var mı?", a: "Evet, yoğunluk durumuna göre aynı gün randevu verilir." },
      { q: "Site yönetimleri için paket teklif var mı?", a: "Blok sayısına göre yazılı paket teklif hazırlanır." },
    ],
  },
  {
    slug: "girne-bocek-ilaclama",
    name: "Girne",
    title: "Girne Böcek İlaçlama ve Haşere Kontrolü",
    metaDescription: "Girne, Alsancak ve çevresinde villa, otel ve restoran ilaçlama. Sivrisinek yaz programları.",
    keywords: ["girne böcek ilaçlama", "girne ilaclama"],
    neighborhoods: ["Alsancak", "Çatalköy", "Lapta", "Karaoğlanoğlu", "Merkez"],
    intro: "Girne bölgesinde turizm sezonu yoğunluğuna uygun sivrisinek ve genel haşere programları uygulanır.",
    faqs: [
      { q: "Villalar için özel program var mı?", a: "Bahçe alanı ve havuz çevresi dahil keşif yapılır." },
      { q: "Restoranlar için gece uygulama yapılır mı?", a: "Kapanış sonrası planlanır." },
    ],
  },
  {
    slug: "gazimagusa-bocek-ilaclama",
    name: "Gazimağusa",
    title: "Gazimağusa İlaçlama Hizmeti",
    metaDescription: "Gazimağusa ve üniversite çevresi konut ve işletme ilaçlama. Hamamböceği ve fare kontrolü.",
    keywords: ["gazimagusa ilaclama", "gazimağusa böcek ilaçlama"],
    neighborhoods: ["Salamis", "Maraş", "Tuzla", "Mutluyaka"],
    intro: "Gazimağusa'da öğrenci konutları ve ticari alanlar için esnek randevu saatleri sunuyoruz.",
    faqs: [
      { q: "Öğrenci evleri için özel teklif var mı?", a: "Küçük metrekareler için yazılı teklif hazırlanır." },
      { q: "Mağaza için rapor veriliyor mu?", a: "İşletmelere uygulama raporu sunulabilir." },
    ],
  },
  {
    slug: "iskele-bocek-ilaclama",
    name: "İskele",
    title: "İskele Böcek İlaçlama",
    metaDescription: "İskele ve Long Beach bölgesinde site ve yazlık konut ilaçlama.",
    keywords: ["iskele ilaclama", "iskele böcek ilaçlama"],
    neighborhoods: ["Long Beach", "Boğaz", "Kumyalı", "Mehmetçik"],
    intro: "Sahil ve site projelerinde mevsimlik sivrisinek ve hamamböceği programları öne çıkar.",
    faqs: [
      { q: "Site yönetimi sözleşmesi yapılıyor mu?", a: "Evet, yıllık bakım anlaşması önerilir." },
      { q: "Yazlık evler için tek seferlik paket var mı?", a: "Sezon açılışı paketi uygulanır." },
    ],
  },
  {
    slug: "guzelyurt-bocek-ilaclama",
    name: "Güzelyurt",
    title: "Güzelyurt Haşere İlaçlama",
    metaDescription: "Güzelyurt ve çevre köylerde tarım ve konut alanları için ilaçlama.",
    keywords: ["güzelyurt ilaclama", "guzelyurt bocek ilaclama"],
    neighborhoods: ["Merkez", "Bostancı", "Akçay"],
    intro: "Geniş bahçeli konutlar ve küçük işletmeler için ücretsiz keşif sonrası yazılı teklif.",
    faqs: [
      { q: "Bahçe alanı dahil mi?", a: "Metrekare ve hedef haşereye göre planlanır." },
      { q: "Acil servis kapsıyor mu?", a: "KKTC genel acil hat ile aynıdır." },
    ],
  },
  {
    slug: "lefke-bocek-ilaclama",
    name: "Lefke",
    title: "Lefke Böcek İlaçlama",
    metaDescription: "Lefke ve Gemikonağı bölgesinde profesyonel haşere kontrolü.",
    keywords: ["lefke ilaclama", "lefke böcek ilaçlama"],
    neighborhoods: ["Gemikonağı", "Cengizköy", "Merkez"],
    intro: "Lefke bölgesinde periyodik bakım anlaşmaları ve tek seferlik müdahale seçenekleri.",
    faqs: [
      { q: "Gemikonağı'na servis var mı?", a: "Evet, tüm alt bölgeler kapsanır." },
      { q: "Teklif nasıl alınır?", a: "Ücretsiz keşif sonrası yazılı teklif verilir." },
    ],
  },
];
