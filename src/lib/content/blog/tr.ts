export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  /** Güncelleme tarihi (ISO); yoksa date kullanılır */
  modified?: string;
  excerpt: string;
  /** İlgili hizmet sayfası slug'ı */
  serviceSlug?: string;
  /** Statik OG görseli (1200×630); yoksa opengraph-image.tsx üretir */
  ogImage?: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hamam-bocekleri-neden-eve-girer",
    title: "Hamam Böcekleri Neden Eve Girer?",
    date: "2017-09-29",
    modified: "2026-06-05",
    excerpt:
      "Hamamböceği istilasının yaygın nedenleri ve evinizi korumak için pratik öneriler.",
    serviceSlug: "hamambocegi-ilaclama",
    sections: [
      {
        heading: "Neden mutfakta görürüz?",
        paragraphs: [
          "Hamamböceği nem, sıcaklık ve gıda arar. Mutfaktaki kırıntılar, açık çöp kutuları ve su birikintileri onlar için ideal ortam oluşturur. Kapı altı boşlukları, pencere pervazları ve tesisat geçişleri eve giriş yollarıdır.",
          "KKTC'de özellikle yaz aylarında aktivite artar; apartman dairelerinde komşu birimden yayılan istilalar da sık görülür.",
        ],
      },
      {
        heading: "Evde hemen yapabilecekleriniz",
        bullets: [
          "Gıdaları kapalı saklayın, tezgâhı her gece silin.",
          "Çöpü kapalı tutun, lavabo altındaki sızıntıları giderin.",
          "Kapı ve pencere contalarını kontrol edin.",
          "Market jeli geçici olabilir; yoğun istilada profesyonel jel uygulaması gerekir.",
        ],
        paragraphs: [],
      },
      {
        heading: "Ne zaman ilaçlama şart?",
        paragraphs: [
          "Günde birden fazla böcek görüyorsanız, gece mutfağa indiğinizde hareket eden bireyler fark ediyorsanız veya yumurta kapsülleri (ootheka) buluyorsanız keşif zamanı gelmiş demektir. Jel ilaçlama koloniyi hedefler; püskürtme tek başına kalıcı çözüm sunmaz.",
        ],
      },
    ],
  },
  {
    slug: "fare-gormek-ilk-24-saat",
    title: "Fare Gördüm — İlk 24 Saatte Ne Yapmalı?",
    date: "2018-11-14",
    modified: "2026-06-05",
    excerpt: "Fare aktivitesi fark ettiğinizde güvenli adımlar ve profesyonel müdahale rehberi.",
    serviceSlug: "fare-ilaclama",
    sections: [
      {
        heading: "Fare gerçekten var mı?",
        paragraphs: [
          "Küçük siyah dışkılar, kemirilmiş ambalaj, gece duvar arkasından gelen sesler ve yağ izleri (rub marks) fare aktivitesinin tipik işaretleridir. Tek bir görüntü bile kontrol gerektirir; dişliler hızla çoğalır.",
        ],
      },
      {
        heading: "İlk gün yapın",
        bullets: [
          "Gıdaları kapalı kutulara alın, zemin kırıntılarını temizleyin.",
          "Fare zehiri alıp kendiniz koymayın — çocuk ve evcil hayvan riski vardır.",
          "Delikleri geçici kapatın; kalıcı kapatma (exclusion) uzman değerlendirmesi ister.",
          "Fotoğraf çekip not alın; keşifte hız kazandırır.",
        ],
        paragraphs: [],
      },
      {
        heading: "Profesyonel müdahale",
        paragraphs: [
          "Kilitli istasyonlar evcil hayvanlara kapalı tutulur. İlk 48–72 saatte aktivite düşer; tam kontrol genelde 7–14 günde değerlendirilir. Lefkoşa, Girne ve tüm KKTC'de aynı gün keşif planlanabilir.",
        ],
      },
    ],
  },
  {
    slug: "karinca-istilasi-neden-tekrarlar",
    title: "Karınca İstilası Neden Tekrarlar?",
    date: "2019-05-22",
    modified: "2026-06-05",
    excerpt: "Mutfaktaki karınca hattını kesmek yetmez — koloni kaynağına inmek gerekir.",
    serviceSlug: "karinca-ilaclama",
    sections: [
      {
        heading: "Görünen hat ≠ tüm koloni",
        paragraphs: [
          "Mutfak tezgâhındaki karınca hattı yalnızca işçilerdir. Koloni genelde duvar içi, bahçe toprağı veya komşu birimde yaşar. Sprey ile hattı silmek birkaç gün rahatlatır; kaynak durduğu sürece geri gelirler.",
        ],
      },
      {
        heading: "Jel neden işe yarar?",
        paragraphs: [
          "Onaylı jel, işçiler tarafından koloniye taşınır ve kraliçe dahil tüm yapıyı etkiler. Doğru noktalara az miktarda uygulanır; gıda alanlarında güvenli protokoller vardır.",
        ],
      },
      {
        heading: "Önleme ipuçları",
        bullets: [
          "Şekerli döküntüleri anında temizleyin.",
          "Pet mama kabını gece kaldırın veya su dolu tepsi içine koyun.",
          "Balkon ve pencere fitillerini kontrol edin.",
          "Bahçede ağaç dallarının eve değmesini engelleyin.",
        ],
        paragraphs: [],
      },
    ],
  },
  {
    slug: "sivrisinek-ilaclama-ne-zaman-yapilir",
    title: "Sivrisinek İlaçlama Ne Zaman Yapılır?",
    date: "2020-06-08",
    modified: "2026-06-05",
    excerpt: "Yaz sezonu öncesi ve sonrası ideal uygulama takvimi — bahçe, site ve işletmeler için.",
    serviceSlug: "sivrisinek-ilaclama",
    sections: [
      {
        heading: "En verimli dönem",
        paragraphs: [
          "KKTC'de sivrisinek aktivitesi nisan–ekim arasında zirve yapar. İlaçlama, üreme alanları (durgun su, bodrum giderleri, saksı altları) temizlendikten sonra planlanmalıdır.",
          "Site ve otellerde sezon öncesi (nisan–mayıs) başlayan periyodik program en etkili sonucu verir.",
        ],
      },
      {
        heading: "Uygulama türleri",
        bullets: [
          "ULV sisleme: geniş bahçe ve ortak alanlar.",
          "Larvisit: su birikintilerinde larva kontrolü.",
          "Barınak odaklı iç alan: uyku odası ve teras çevresi.",
        ],
        paragraphs: [
          "Yoğun bölgelerde 2–4 haftada bir tekrar önerilir; yağmur sonrası program revize edilebilir.",
        ],
      },
      {
        heading: "Siz ne yapabilirsiniz?",
        paragraphs: [
          "Durgun su birikintilerini haftalık boşaltın, olukları temizleyin. Teras lambalarını gece kapatmak veya sarı LED kullanmak yaklaşan sivrisinek sayısını azaltır.",
        ],
      },
    ],
  },
  {
    slug: "akrep-goruldugunde-ne-yapilir",
    title: "Akrep Görüldüğünde Ne Yapılır?",
    date: "2021-09-03",
    modified: "2026-06-05",
    excerpt: "Panik yapmadan güvenli adımlar — perimeter bariyer ve acil müdahale.",
    serviceSlug: "akrep-ilaclama",
    sections: [
      {
        heading: "Önce güvenlik",
        paragraphs: [
          "Akrebe çıplak ayakla dokunmayın, eldivenle yakalamaya çalışmayın. Çocuk ve evcil hayvanları odadan uzaklaştırın. Sokma şüphesinde önce en yakın sağlık kuruluşuna başvurun; ardından alan ilaçlaması planlayın.",
        ],
      },
      {
        heading: "Neden evde görülür?",
        bullets: [
          "Taş yığınları, nemli bodrum ve depo alanları.",
          "Bahçede biriken inşaat malzemesi.",
          "Duvar dipleri ve kapı eşikleri — gündüz saklanma noktaları.",
        ],
        paragraphs: [
          "Perimeter (çevre) bariyer uygulaması dışarıdan içeri girişi azaltır; iç alan hedefleme görülen rotayı keser.",
        ],
      },
      {
        heading: "Profesyonel program",
        paragraphs: [
          "Keşifte risk haritası çıkarılır; bahçe, teras ve zemin kat önceliklidir. KKTC'de yaz aylarında periyodik kontrol özellikle villa ve müstakil evlerde önerilir.",
        ],
      },
    ],
  },
  {
    slug: "termit-hasari-nasil-anlasilir",
    title: "Termit Hasarı Nasıl Anlaşılır?",
    date: "2022-04-11",
    modified: "2026-06-05",
    excerpt: "Ahşap yapılarda termit (white ant) belirtileri ve erken müdahalenin önemi.",
    serviceSlug: "termit-ilaclama",
    sections: [
      {
        heading: "Termit nedir?",
        paragraphs: [
          "Termitler (halk arasında white ant) selülozla beslenir; ahşap kiriş, kapı pervazı ve mobilyada gizli tünel açarlar. KKTC'de nemli bölgeler ve ahşap yapılarda risk daha yüksektir.",
        ],
      },
      {
        heading: "Uyarı işaretleri",
        bullets: [
          "Ahşapta çıtır çıtır, içi boş ses — dış yüzey sağlam görünebilir.",
          "Duvar boyunca kilise tüneli (mud tube) izleri.",
          "Bahar aylarında kanatlı bireyler (swarm) — genelde pencere kenarında.",
          "Zemin kaplamasında kabarma veya yumuşama.",
        ],
        paragraphs: [],
      },
      {
        heading: "Müdahale",
        paragraphs: [
          "Termit ilaçlaması için önce ücretsiz keşif gerekir; yazılı teklif sonrası bariyer enjeksiyonu veya hedefli uygulama yapı tipine göre seçilir. Erken tespit onarım maliyetini ciddi ölçüde düşürür.",
        ],
      },
    ],
  },
  {
    slug: "evde-hangi-bocekler-ilaclama-gerektirir",
    title: "Evde Hangi Böcekler İlaçlama Gerektirir?",
    date: "2024-07-06",
    modified: "2026-06-05",
    excerpt: "Hamamböceği, gümüşçün, kene ve diğer yaygın haşereler — ne zaman profesyonel destek alınır?",
    serviceSlug: "bocek-ilaclama",
    sections: [
      {
        heading: "Her böcek aynı değil",
        paragraphs: [
          "Tek tür görüp hemen genel sprey almak çoğu zaman sorunu büyütür. Doğru teşhis, doğru ürün ve doz demektir. Genel haşere kontrolünde önce tür tespiti, sonra hedefli plan yapılır.",
        ],
      },
      {
        heading: "Sık karşılaşılan türler",
        bullets: [
          "Hamamböceği — jel uygulama, kalıcı koloni kontrolü.",
          "Gümüşçün — nem kaynağı giderilmeli, hedefli uygulama.",
          "Kene — bahçe ve evcil hayvan rotası birlikte değerlendirilir.",
          "Pire — evcil hayvan tedavisi ile eş zamanlı alan ilaçlaması.",
        ],
        paragraphs: [],
      },
      {
        heading: "Tek ziyarette ne olur?",
        paragraphs: [
          "Keşifte tüm alan taranır; birden fazla tür varsa kombine program önerilir. Yazılı teklif keşif sonrası WhatsApp veya e-posta ile iletilir.",
        ],
      },
    ],
  },
];
