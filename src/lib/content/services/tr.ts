import { company } from "../../company";

/** Hizmet detay sayfasındaki saha videosu */
export type ServiceVideo = {
  /** H.264 MP4 — birincil kaynak (Safari/iOS dahil tüm modern tarayıcılar) */
  src: string;
  /** Opsiyonel VP9 WebM yedeği — H.264 desteği olmayan tarayıcılar için */
  webmSrc?: string;
  poster: string;
  width: number;
  height: number;
  /** ISO 8601 süre, ör. "PT1M10S" */
  durationIso: string;
  /** ISO 8601 tarih (VideoObject.uploadDate) */
  uploadDate: string;
  title: string;
  description: string;
};

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
  /** Opsiyonel uzman bilgilendirme paragrafları (hizmet detay sayfasında) */
  intro?: string[];
  /** Opsiyonel saha videosu (public/videos altında, self-hosted) */
  video?: ServiceVideo;
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
    slug: "alman-hamambocegi-ilaclama",
    title: "Alman Hamamböceği İlaçlama KKTC",
    shortTitle: "Alman Hamamböceği",
    metaDescription:
      "Mutfak ve banyoda çoğalan Alman hamamböceğine (kalorifer böceği) uzman müdahale: monitör tuzağıyla teşhis, jel yem ve gelişim engelleyici. Lefkoşa, Girne ve tüm KKTC.",
    keywords: [
      "alman hamamböceği ilaçlama",
      "alman hamambocegi kktc",
      "kalorifer böceği ilaçlama",
      "mutfak hamamböceği",
      "blattella germanica",
    ],
    heroSubtitle: "Monitör tuzağıyla teşhis, jel yem ve gelişim engelleyici ile kalıcı kontrol",
    intro: [
      "Alman hamamböceği (Blattella germanica), halk arasında kalorifer böceği olarak da bilinen, 1–1,5 cm boyunda, açık kahverengi ve sırtında iki koyu paralel çizgi bulunan küçük bir türdür. Neredeyse tamamen bina içinde yaşar; mutfak dolapları, buzdolabı ve fırın arkası, bulaşık makinesi çevresi, priz ve elektrik kutuları gibi sıcak ve nemli boşlukları tercih eder.",
      "KKTC'de konutlarda, restoran ve otel mutfaklarında en sık karşılaştığımız hamamböceği türü budur ve en zor kontrol edilenidir. Dişi, yumurta kesesini (30–40 yumurta) yumurtalar çatlayana kadar üzerinde taşır; sıcak ortamda yumurtadan erişkine geçiş birkaç hafta sürer. Bu nedenle birkaç bireyle başlayan sorun kısa sürede yüzlerceye ulaşabilir. Gündüz görülmesi genellikle yoğun bir istilanın işaretidir.",
      "Market spreyleri ve rastgele sıvı ilaçlama çoğu zaman sorunu çözmez: kovucu etkisi böcekleri duvar ve cihaz içlerine dağıtır, popülasyonda direnç gelişir. Bu yüzden Alman hamamböceğinde yöntemimiz önce teşhis, sonra hedefli uygulama ve ölçülebilir takiptir.",
      "Sayfadaki saha videosu, bir müşterimizin mutfağında yerleştirdiğimiz monitör tuzaklarını ve yuvalanma noktalarını gösteriyor. Tuzaktaki erişkin ve yavru (nimf) sayısı bize istilanın yoğunluğunu ve kaynağını gösterir; takip ziyaretlerinde aynı noktalarla karşılaştırarak sonucu sayıyla raporlarız.",
    ],
    processSteps: [
      "Ücretsiz keşif: mutfak, banyo, cihaz arkaları ve elektrik boşluklarında yuvalanma noktalarının tespiti",
      "Monitör (yapışkan) tuzaklarla teşhis: erişkin/nimf oranı ile istila yoğunluğunun ve kaynağın belirlenmesi",
      "Çatlak ve yarıklara hedefli jel yem uygulaması; direnç oluşmaması için etken madde rotasyonu",
      "Yumurta ve yavru döngüsünü kırmak için gelişim engelleyici (IGR) destekli uygulama",
      "Hijyen ve yalıtım önerileri: yiyecek kaynağı, su kaçakları, boşlukların kapatılması",
      "10–14 gün sonra takip ziyareti: tuzak sayımı, gerekirse ikinci uygulama ve yazılı rapor",
    ],
    faqs: [
      {
        q: "Alman hamamböceğini diğer hamamböceklerinden nasıl ayırt ederim?",
        a: "1–1,5 cm boyunda, açık kahverengidir ve baş arkasındaki kalkanda iki koyu paralel çizgi bulunur. Genellikle mutfak ve banyoda, cihazların arkasında görülür. Lağımdan gelen büyük, koyu renkli türlerden (Amerikan / Doğu hamamböceği) farklıdır ve farklı yöntem gerektirir.",
      },
      {
        q: "Bir uygulama yeterli olur mu?",
        a: "Hafif istilalarda tek uygulama ve takip ziyareti çoğu zaman yeterlidir. Yoğun istilada yumurta keseleri ilk uygulamadan etkilenmediği için 10–14 gün sonra ikinci uygulama planlarız. Süreci tuzak sayımlarıyla raporlarız.",
      },
      {
        q: "Uygulama sırasında mutfağı boşaltmamız gerekir mi?",
        a: "Jel yem uygulamasında evi boşaltmanız gerekmez; açıkta gıda ve tabakların kaldırılması yeterlidir. Ek uygulama gereken durumlarda havalandırma ve çocuk/evcil hayvan talimatlarını önceden veririz.",
      },
      {
        q: "Restoran ve otel mutfaklarında hizmet veriyor musunuz?",
        a: "Evet. Ticari mutfaklarda servis saatlerini aksatmayacak şekilde planlama yapar, periyodik kontrol programı ve denetimlerde kullanılabilecek uygulama kayıtları sunarız.",
      },
      {
        q: "Tekrar gelmemesi için ne yapmalıyım?",
        a: "Gece açıkta yiyecek ve kirli bulaşık bırakmamak, su kaçaklarını gidermek, çöpü kapalı tutmak ve dışarıdan gelen karton/kolileri kontrol etmek en önemli adımlardır. Takip ziyaretinde evinize özel önerileri yazılı olarak iletiriz.",
      },
    ],
    video: {
      src: "/videos/alman-hamambocegi-saha.mp4?v=1",
      webmSrc: "/videos/alman-hamambocegi-saha.webm?v=1",
      poster: "/videos/alman-hamambocegi-saha-poster.jpg?v=1",
      width: 540,
      height: 960,
      durationIso: "PT1M10S",
      uploadDate: "2026-10-07",
      title: "Alman hamamböceği — mutfakta monitör tuzağı ile tespit (saha çalışması)",
      description:
        "KKTC'de bir mutfakta yerleştirilen yapışkan monitör tuzaklarında yakalanan Alman hamamböceği erişkin ve nimfleri ile tezgâh ve süpürgelik çevresindeki yuvalanma noktaları.",
    },
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
