import type { Locale } from "@/i18n/config";

export type CompanyContent = {
  legalName: string;
  activityArea: string;
  alternateName: string;
  credentials: string[];
  productNote: string;
  serviceAreas: string[];
  aboutParagraphs: readonly string[];
};

const content: Record<Locale, CompanyContent> = {
  tr: {
    legalName: "Kıbrıs Haşere ilaçlama",
    activityArea: "Haşere ve Kemirgen ilaçlaması",
    alternateName: "Alo Böcek",
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
    aboutParagraphs: [
      "KKTC'de güvenilir ve tam kapsamlı haşere ve kemirgen ilaçlama hizmeti veriyor, ilaçlama sonrası temizliğinizi takip ediyoruz. İşyerinizin veya evinizin ilaçlama hizmetini tam kapsamlı olarak veriyor, güler yüzlü ve samimi ekibimiz ile yaşadığınız yerleri itina ile ilaçlıyoruz.",
      "2010 yılından bu yana haşere ve kemirgen ilaçlama sektöründe faaliyet gösteriyoruz. ISO ve TSE kalite standartları belgelerimizle işimizi üst standartlarda yürütüyoruz.",
      "Lefkoşa ve KKTC'nin tüm bölgelerine hizmet veriyoruz. Kamu kurumları ile ev, apartman ve site gibi konut alanlarında ilaçlama gerçekleştiriyoruz; periyodik ilaçlama için ücretsiz keşif, uygulama sonrası rapor ve evrak teslimi sunuyoruz.",
    ],
  },
  en: {
    legalName: "Cyprus Pest Control",
    activityArea: "Pest and rodent control",
    alternateName: "Alo Böcek",
    credentials: [
      "ISO quality standards",
      "TSE quality standards",
      "TSE-HYB service adequacy certificate",
    ],
    productNote:
      "Original Bayer Environmental Science products; low-odour, non-staining professional treatment.",
    serviceAreas: [
      "Residential (home, apartment, housing complex)",
      "Business premises",
      "School",
      "Hospital",
      "Factory",
      "Park and garden (outdoor)",
      "Ship and bakery (sector-specific)",
    ],
    aboutParagraphs: [
      "We provide reliable, comprehensive pest and rodent control across the TRNC and follow up on post-treatment cleanliness. We deliver full-service treatment for your home or business, caring for your living spaces with our friendly and dedicated team.",
      "We have been active in pest and rodent control since 2010 and operate to high standards with our ISO and TSE quality certifications.",
      "We serve Lefkoşa and all regions of the TRNC. We treat public institutions as well as residential areas including homes, apartments, and housing complexes; we offer free inspection for periodic treatment, plus post-application reports and documentation.",
    ],
  },
  ru: {
    legalName: "Kıbrıs Haşere ilaçlama",
    activityArea: "Дезинсекция и дератизация",
    alternateName: "Alo Böcek",
    credentials: [
      "Стандарты качества ISO",
      "Стандарты качества TSE",
      "Сертификат TSE-HYB",
    ],
    productNote:
      "Оригинальные препараты Bayer Environmental Science; малозапахные, без пятен.",
    serviceAreas: [
      "Жилые объекты (дом, квартира, жилой комплекс)",
      "Предприятия",
      "Школа",
      "Больница",
      "Завод",
      "Парк и сад (открытая территория)",
      "Судно и пекарня (отраслевые)",
    ],
    aboutParagraphs: [
      "Мы предоставляем надёжную и полную дезинсекцию и дератизацию в TRNC и следим за чистотой после обработки. Оказываем комплексную обработку вашего дома или предприятия; наша дружелюбная команда бережно обрабатывает ваши жилые пространства.",
      "Работаем в сфере дезинсекции и дератизации с 2010 года и ведём работу по высоким стандартам с сертификатами ISO и TSE.",
      "Обслуживаем Lefkoşa и все регионы TRNC. Проводим обработку государственных учреждений, а также жилых объектов — домов, квартир и жилых комплексов; предлагаем бесплатный осмотр для периодической обработки, отчёты и документы после проведения работ.",
    ],
  },
};

export function getCompany(locale: Locale): CompanyContent {
  return content[locale] ?? content.tr;
}
