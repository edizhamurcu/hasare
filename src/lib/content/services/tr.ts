import { company } from "../../company";

const brandPhones = company.phones.map((p) => p.display).join(" , ");

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSubtitle: string;
  processSteps: string[];
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
    heroSubtitle: "ULV ve sisleme — standart aylık sprey teklifinden ayrı yazılı teklif ile sunulur",
    processSteps: ["Üreme alanı tespiti", "ULV / sisleme (ayrı teklif)", "Periyodik yaz programı"],
    faqs: [
      {
        q: "Standart sözleşmeye dahil mi?",
        a: "Hayır. Ergin sivrisinek, karasinek ve küpdüşen için ULV yöntemi standart teklif kapsamına dahil değildir; talep halinde ayrı yazılı teklif hazırlanır.",
      },
      {
        q: "Sivrisinek ilaçlama ne sıklıkla yapılmalı?",
        a: "Yoğun bölgelerde 2–4 haftada bir yaz programı önerilir.",
      },
      { q: "Havuzlu sitelerde uygulanır mı?", a: "Evet, site yönetimi için toplu sözleşme ve dış alan teklifi yapılabilir." },
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
    faqs: [
      {
        q: "Standart teklifte hangi türler var?",
        a: "Yüzey sprey sözleşmesinde karınca, fare, hamamböceği türleri, örümcek, gümüşçün, kırkayak vb. dahildir. Termit, tahta kurusu, pire ve kene ayrı tekliftir.",
      },
      {
        q: "Acil servis var mı?",
        a: "Aylık sözleşmede kapsam dahil acil sorunlara 24 saat içinde ücretsiz müdahale; tek seferlik işlerde 7/24 yönlendirme.",
      },
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
    faqs: [
      {
        q: "Standart sözleşmeye dahil mi?",
        a: "Hayır. Termit ve ahşap zararlıları standart yüzey sprey teklifine dahil değildir; keşif sonrası ayrı yazılı teklif sunulur.",
      },
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
    faqs: [
      { q: "Akrep sokması durumunda ne yapmalıyım?", a: "Önce sağlık kuruluşuna başvurun; ardından alan ilaçlaması planlanır." },
      { q: "Bahçede uygulama yapılır mı?", a: "Taş yığınları ve nemli alanlar önceliklidir." },
    ],
  },
  {
    slug: "dezenfeksiyon",
    title: "Dezenfeksiyon ve Hijyen Uygulaması",
    shortTitle: "Dezenfeksiyon",
    metaDescription:
      `${company.legalName} ile işletme, okul, hastane ve konut dezenfeksiyonu. Corona virüs dezenfeksiyon ve ULV uygulama.`,
    keywords: ["dezenfeksiyon", "corona dezenfeksiyon kktc", "işletme dezenfeksiyon"],
    heroSubtitle: "Corona virüs dezenfeksiyon ve genel hijyen protokolü",
    processSteps: ["Alan sınıflandırması", "Ürün ve PPE protokolü", "Sertifikalı rapor"],
    faqs: [
      { q: "Corona dezenfeksiyon uygulaması yapılıyor mu?", a: "Evet, corona virüs dezenfeksiyon hizmeti sunulmaktadır." },
      { q: "Restoran için uygun mu?", a: "Evet, kapanış sonrası zamanlanmış uygulama yapılır." },
    ],
  },
  {
    slug: "ev-ilaclama",
    title: "Ev İlaçlama KKTC",
    shortTitle: "Ev",
    metaDescription: `Konut, daire ve site daireleri için haşere ve kemirgen ilaçlama. ${company.legalName} ${brandPhones}.`,
    keywords: ["ev ilaçlama", "daire ilaclama kktc"],
    heroSubtitle: "Apartman ve müstakil konutlar için güvenli uygulama",
    processSteps: ["Ücretsiz keşif", "Hedefli uygulama", "Havalandırma talimatı"],
    faqs: [
      { q: "Ev ilaçlama ne kadar sürer?", a: "Daire büyüklüğüne göre genelde 1–2 saat." },
      { q: "Evcil hayvanlar için güvenli mi?", a: "Onaylı ürünler ve uygulama sonrası bekleme süresi anlatılır." },
    ],
  },
  {
    slug: "is-yeri-ilaclama",
    title: "İş Yeri İlaçlama",
    shortTitle: "İş yeri",
    metaDescription: "Ofis, mağaza ve ticari alanlar için haşere kontrolü ve periyodik bakım.",
    keywords: ["iş yeri ilaçlama", "ofis ilaclama lefkosa"],
    heroSubtitle: "Periyodik sözleşme ve raporlama",
    processSteps: ["Risk analizi", "Periyodik plan", "Uygulama raporu"],
    faqs: [
      { q: "Mesai dışı uygulama var mı?", a: "İşletme kapanış saatine göre planlanır." },
      { q: "Kamu kurumlarıyla çalışıyor musunuz?", a: "Evet, kurumsal ve kamu referansları mevcuttur." },
    ],
  },
  {
    slug: "hastane-ilaclama",
    title: "Hastane İlaçlama",
    shortTitle: "Hastane",
    metaDescription: "Sağlık tesisleri için hijyen standartlarına uygun haşere ve dezenfeksiyon.",
    keywords: ["hastane ilaçlama", "klinik ilaclama"],
    heroSubtitle: "Hassas alan protokolü",
    processSteps: ["Bölüm bazlı plan", "Onaylı ürün uygulaması", "Kayıt ve rapor"],
    faqs: [
      { q: "Hastane ilaçlama hangi sıklıkta yapılır?", a: "Risk değerlendirmesine göre periyodik program oluşturulur." },
      { q: "Dezenfeksiyon dahil mi?", a: "Hastane paketinde dezenfeksiyon uygulamaları planlanabilir." },
    ],
  },
  {
    slug: "okul-ilaclama",
    title: "Okul İlaçlama",
    shortTitle: "Okul",
    metaDescription: "Okul ve eğitim kurumları için güvenli haşere mücadelesi KKTC.",
    keywords: ["okul ilaçlama"],
    heroSubtitle: "Tatil dönemi ve mesai dışı uygulama",
    processSteps: ["Tatil planlaması", "Çocuk güvenliği odaklı ürün seçimi", "Rapor"],
    faqs: [
      { q: "Öğrenciler varken uygulama yapılır mı?", a: "Tercihen tatil veya mesai dışı zamanlanır." },
      { q: "Ücretsiz keşif var mı?", a: "Kurumsal okullar için keşif yapılır." },
    ],
  },
  {
    slug: "fabrika-ilaclama",
    title: "Fabrika İlaçlama",
    shortTitle: "Fabrika",
    metaDescription: "Üretim ve depo alanları için entegre haşere yönetimi.",
    keywords: ["fabrika ilaçlama"],
    heroSubtitle: "Geniş alan ve depo odaklı program",
    processSteps: ["Alan haritalama", "İstasyon ağı", "Periyodik denetim"],
    faqs: [
      { q: "Gıda üretim tesislerinde çalışıyor musunuz?", a: "Evet, sektöre uygun ürün ve protokol uygulanır." },
      { q: "Fırın ilaçlama ile farkı nedir?", a: "Fırın sayfamızda gıda tesislerine özel gereksinimler detaylandırılır." },
    ],
  },
  {
    slug: "firin-ilaclama",
    title: "Fırın İlaçlama",
    shortTitle: "Fırın",
    metaDescription: `Fırın ve unlu mamul tesisleri için haşere kontrolü — ${company.legalName}.`,
    keywords: ["fırın ilaçlama", "firin ilaclama"],
    heroSubtitle: "Gıda güvenliği odaklı mücadele",
    processSteps: ["HACCP uyumlu plan", "Jel ve istasyon uygulaması", "Denetim raporu"],
    faqs: [
      { q: "Üretim hattı durur mu?", a: "Planlama ile minimum kesinti hedeflenir." },
      { q: "Hangi haşereler öncelikli?", a: "Hamamböceği, kemirgen ve depo zararlıları." },
    ],
  },
  {
    slug: "gemi-ilaclama",
    title: "Gemi İlaçlama",
    shortTitle: "Gemi",
    metaDescription: "Gemi ve liman araçları için haşere ilaçlama ve sertifikasyon desteği.",
    keywords: ["gemi ilaçlama", "gemi ilaclama kktc"],
    heroSubtitle: "Liman ve gemi özel uygulaması",
    processSteps: ["Gemi keşfi", "Kabin ve ambar uygulaması", "Belge / rapor"],
    faqs: [
      { q: "Liman çıkışı öncesi yapılabilir mi?", a: "Randevu ile liman programına uygun planlanır." },
      { q: "Uluslararası belge gerekir mi?", a: "Talep edilen evraklar düzenlenebilir — detay için arayın." },
    ],
  },
];
