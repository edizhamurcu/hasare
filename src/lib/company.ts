import { CANONICAL_SITE_URL } from "./site-domain";

export const company = {
  legalName: "Kıbrıs Haşere ilaçlama",
  activityArea: "Haşere ve Kemirgen ilaçlaması",
  alternateName: "Alo Böcek",
  foundedYear: 2010,
  phones: [
    { e164: "+905338591141", display: "+90 533 859 11 41" },
    { e164: "+905338591181", display: "+90 533 859 11 81" },
  ],
  address: {
    locality: "Lefkoşa",
    region: "KKTC",
    display: "Lefkoşa / KKTC",
  },
  credentials: [
    "ISO kalite standartları",
    "TSE kalite standartları",
    "TSE-HYB hizmet yeterlilik belgesi",
  ],
  productNote:
    "Bayer Çevre Bilimleri orijinal ürünleri; kokusuz ve leke bırakmayan profesyonel uygulama.",
  serviceAreas: [
    "Konut (ev, apartman, site)",
    "İş yeri",
    "Okul",
    "Hastane",
    "Fabrika",
    "Park ve bahçe (açık alan)",
    "Gemi ve fırın (sektörel)",
  ],
  /** Kanonik site URL */
  siteUrl: CANONICAL_SITE_URL,
  social: {
    facebook: {
      handle: "alobocekkibris",
      url: "https://www.facebook.com/alobocekkibris",
    },
    instagram: {
      handle: "alo.bocek",
      url: "https://www.instagram.com/alo.bocek",
    },
  },
} as const;

export const aboutParagraphs = [
  "KKTC'de güvenilir ve tam kapsamlı haşere ve kemirgen ilaçlama hizmeti veriyor, ilaçlama sonrası temizliğinizi takip ediyoruz. İşyerinizin veya evinizin ilaçlama hizmetini tam kapsamlı olarak veriyor, güler yüzlü ve samimi ekibimiz ile yaşadığınız yerleri itina ile ilaçlıyoruz.",
  "2010 yılından bu yana haşere ve kemirgen ilaçlama sektöründe faaliyet gösteriyoruz. ISO ve TSE kalite standartları belgelerimizle işimizi üst standartlarda yürütüyoruz.",
  "Lefkoşa ve KKTC'nin tüm bölgelerine hizmet veriyoruz. Kamu kurumları ile ev, apartman ve site gibi konut alanlarında ilaçlama gerçekleştiriyoruz; periyodik ilaçlama için ücretsiz keşif, uygulama sonrası rapor ve evrak teslimi sunuyoruz.",
] as const;
