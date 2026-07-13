import type { Locale } from "@/i18n/config";

export type ProposalTerms = {
  customerNoticeTitle: string;
  customerNoticeBody: string;
  includedTitle: string;
  includedMethod: string;
  includedPests: string[];
  excludedTitle: string;
  excludedIntro: string;
  excludedItems: string[];
  contractTitle: string;
  contractItems: { title: string; body: string }[];
  productsTitle: string;
  productsBody: string;
  efkTitle: string;
  efkBody: string;
  equipmentTitle: string;
  equipmentItems: string[];
};

const tr: ProposalTerms = {
  customerNoticeTitle: "Teklif almadan önce bilmeniz gerekenler",
  customerNoticeBody:
    "Yazılı teklifimiz, Alo Böcek standart haşere kontrol sözleşmesine dayanır. Aşağıdaki kapsam ve koşullar keşif sonrası gönderdiğimiz belgede yer alır; tutar yalnızca yazılı teklifte paylaşılır, web sitemizde fiyat yayınlanmaz.",
  includedTitle: "Standart teklifte dahil olanlar",
  includedMethod:
    "Yüzey spreylemesi yöntemi ile periyodik haşere kontrolü (aylık sözleşmeli programlar için uzman ekip tarafından uygulama).",
  includedPests: [
    "Karınca",
    "Fare, lağım ve çatı sıçanı",
    "Amerikan, oryantal ve kahverengi bantlı hamamböceği",
    "Örümcek, gümüşçün, tesbih böceği",
    "Kırkayak ve çıyan",
  ],
  excludedTitle: "Standart teklifte olmayanlar (ayrı teklif)",
  excludedIntro:
    "Aşağıdaki işlemler standart teklife dahil değildir. Talep halinde ayrı yazılı teklif hazırlanır:",
  excludedItems: [
    "ULV yöntemi: ergin sivrisinek, karasinek, küpdüşen",
    "Tahta kurusu, termit ve diğer ahşap zararlıları",
    "Pire ve kene mücadelesi",
    "Tek seferlik özel müdahaleler (kapsam dışı türler)",
  ],
  contractTitle: "Sözleşme ve hizmet koşulları",
  contractItems: [
    {
      title: "Periyot ve acil destek",
      body: "Aylık sözleşmelerde uygulama ayda bir kez uzman ekip tarafından yapılır. Beklenmeyen acil haşere sorunlarında 24 saat içinde ücretsiz müdahale sağlanır (sözleşme kapsamındaki türler için).",
    },
    {
      title: "Ürün kalitesi",
      body: "Bayer Çevre Bilimleri orijinal biyosidal ürünleri kullanılır; uygulama alanında kokusuz ve leke bırakmayan formülasyonlar tercih edilir.",
    },
    {
      title: "EFK cihazları (talep üzerine)",
      body: "İşletmedeki mevcut elektrikli sinek yakalayıcılar kontrol edilir; lamba yılda en az bir kez, yapışkan ped 2–4 haftada bir değiştirilir. Değiştirilen malzemeler ayrı faturalandırılır.",
    },
    {
      title: "Kemirgen istasyonları ve tuzaklar",
      body: "Kullanılan yem istasyonları ve canlı yakalama tuzakları Alo Böcek mülkiyetindedir; iş birliği süresince kullanım ücreti alınmaz. Sözleşme bitiminde toplanır. İşletme personeli tarafından kaldırılır veya kaybolursa bedeli faturalandırılır.",
    },
    {
      title: "Yazılı teklif",
      body: "Ücret bilgisi yalnızca ücretsiz keşif sonrası hazırlanan yazılı teklif belgesinde paylaşılır. Web sitesinde fiyat listesi bulunmaz.",
    },
  ],
  productsTitle: "Kullandığımız ürünler",
  productsBody:
    "Profesyonel haşere mücadelesinde Bayer Çevre Bilimleri ürün gamı; DSÖ onaylı, uygulama sonrası havalandırma ve bekleme süreleri yazılı olarak bildirilir.",
  efkTitle: "EFK bakımı",
  efkBody:
    "Restoran, otel ve üretim tesislerinde talep üzerine EFK kontrolü planlanır — standart aylık sprey teklifine otomatik dahil değildir.",
  equipmentTitle: "Ekipman mülkiyeti",
  equipmentItems: [
    "Yem istasyonları ve canlı tuzaklar firmamıza aittir.",
    "Sözleşme sonunda ekipman geri alınır.",
    "Kayıp veya müşteri kaynaklı hasar ayrı faturalandırılır.",
  ],
};

const en: ProposalTerms = {
  customerNoticeTitle: "What to know before you accept a quote",
  customerNoticeBody:
    "Our written quotes follow the Alo Böcek standard pest control agreement. Scope and terms below match what we send after inspection. Amounts are shared only in the written quote — not on this website.",
  includedTitle: "Included in the standard quote",
  includedMethod:
    "Periodic pest control by surface spraying method (monthly contract programmes applied by our specialist team).",
  includedPests: [
    "Ants",
    "Mice, sewer and roof rats",
    "American, Oriental and brown-banded cockroaches",
    "Spiders, silverfish, woodlice",
    "Centipedes and millipedes",
  ],
  excludedTitle: "Not in the standard quote (separate proposal)",
  excludedIntro:
    "The following are not included in the standard proposal. We prepare a separate written quote on request:",
  excludedItems: [
    "ULV treatment: adult mosquitoes, houseflies, earwigs",
    "Bed bugs, termites and other wood pests",
    "Flea and tick control",
    "One-off treatments for out-of-scope species",
  ],
  contractTitle: "Contract and service terms",
  contractItems: [
    {
      title: "Frequency and emergency support",
      body: "On monthly contracts, treatment is carried out once a month by our expert team. Unexpected urgent pest issues within scope receive free intervention within 24 hours.",
    },
    {
      title: "Product quality",
      body: "Original Bayer Environmental Science biocidal products; formulations chosen to be low-odour and non-staining in treated areas.",
    },
    {
      title: "EFK units (on request)",
      body: "Existing electric fly killers at the site are serviced; lamps at least yearly, sticky pads every 2–4 weeks. Replacement materials are invoiced separately.",
    },
    {
      title: "Rodent stations and live traps",
      body: "Bait stations and live-capture traps remain Alo Böcek property; no hire fee during the contract. Collected at contract end. Removal or loss by client staff is invoiced.",
    },
    {
      title: "Written quote",
      body: "Fees are provided only in the written quote after a free inspection. No price list is published on the website.",
    },
  ],
  productsTitle: "Products we use",
  productsBody:
    "Bayer Environmental Science professional range; WHO-approved products with written ventilation and re-entry guidance after treatment.",
  efkTitle: "EFK maintenance",
  efkBody:
    "For restaurants, hotels and production sites, EFK servicing is planned on request — not automatically part of the standard monthly spray quote.",
  equipmentTitle: "Equipment ownership",
  equipmentItems: [
    "Bait stations and live traps belong to our company.",
    "Equipment is collected when the contract ends.",
    "Loss or damage caused by the client is invoiced separately.",
  ],
};

const ru: ProposalTerms = {
  customerNoticeTitle: "Что важно знать до принятия предложения",
  customerNoticeBody:
    "Письменное предложение основано на стандартном договоре Alo Böcek. Ниже — краткое содержание объёма и условий. Суммы — только в письменном предложении после осмотра, не на сайте.",
  includedTitle: "Входит в стандартное предложение",
  includedMethod:
    "Периодическая дезинсекция методом поверхностного распыления (ежемесячные договоры, работы выполняет специализированная бригада).",
  includedPests: [
    "Муравьи",
    "Мыши, канализационные и чердачные крысы",
    "Американский, ориентальный и рыжий тараканы",
    "Пауки, рыбки, мокрицы",
    "Сороконожки и многоножки",
  ],
  excludedTitle: "Не входит в стандарт (отдельное предложение)",
  excludedIntro:
    "Следующие работы не включены в стандартное предложение. По запросу готовится отдельный расчёт:",
  excludedItems: [
    "Метод ULV: комары, мухи, уховёртки",
    "Клопы, термиты и другие древесные вредители",
    "Борьба с блохами и клещами",
    "Разовые обработки вне стандартного перечня",
  ],
  contractTitle: "Условия договора и обслуживания",
  contractItems: [
    {
      title: "Периодичность и срочная помощь",
      body: "По ежемесячному договору обработка проводится раз в месяц. Неожиданные срочные случаи в рамках договора — бесплатный выезд в течение 24 часов.",
    },
    {
      title: "Качество препаратов",
      body: "Оригинальные препараты Bayer Environmental Science; малозапахные, не оставляющие пятен формуляции.",
    },
    {
      title: "Лампы-ловушки EFK (по запросу)",
      body: "Обслуживание существующих EFK; лампы не реже раза в год, клеевые пластины каждые 2–4 недели. Материалы оплачиваются отдельно.",
    },
    {
      title: "Станции и живоловушки",
      body: "Приманочные станции и живоловушки — собственность Alo Böcek; аренда в период договора бесплатна. По окончании договора забираются. Утрата по вине заказчика оплачивается отдельно.",
    },
    {
      title: "Письменное предложение",
      body: "Стоимость указывается только в письменном предложении после бесплатного осмотра. На сайте прайс-листа нет.",
    },
  ],
  productsTitle: "Используемые препараты",
  productsBody:
    "Профессиональная линейка Bayer Environmental Science; сроки проветривания сообщаются письменно.",
  efkTitle: "Обслуживание EFK",
  efkBody:
    "Для ресторанов, отелей и производств — по запросу; не входит автоматически в стандартное ежемесячное распыление.",
  equipmentTitle: "Оборудование",
  equipmentItems: [
    "Станции и ловушки остаются собственностью компании.",
    "По окончании договора оборудование забирается.",
    "Утрата или повреждение по вине клиента оплачивается отдельно.",
  ],
};

const map: Record<Locale, ProposalTerms> = { tr, en, ru };

export function getProposalTerms(locale: Locale): ProposalTerms {
  return map[locale] ?? map.tr;
}

/** Hizmet sayfası için kapsam notu (standart dışı hizmetler) */
export function getServiceScopeNote(slug: string, locale: Locale): string | null {
  const t = getProposalTerms(locale);
  const separate = locale === "en"
    ? "This service is not part of the standard monthly surface-spray quote. Request a separate written proposal."
    : locale === "ru"
      ? "Эта услуга не входит в стандартное ежемесячное предложение. Закажите отдельный расчёт."
      : "Bu hizmet standart aylık yüzey sprey teklifine dahil değildir. Ayrı yazılı teklif talep edin.";

  const separateUlV = locale === "en"
    ? "Adult mosquito ULV treatment is not included in the standard quote; larval/site spraying may be quoted separately."
    : locale === "ru"
      ? "ULV от комаров не входит в стандарт; остальное — по отдельному расчёту."
      : "Standart teklifte ergin sivrisinek ULV uygulaması yoktur; site/sisleme için ayrı teklif hazırlanır.";

  if (
    slug === "termit-ilaclama" ||
    slug === "akrep-ilaclama" ||
    slug === "dezenfeksiyon"
  ) {
    return separate;
  }
  if (slug === "sivrisinek-ilaclama") {
    return separateUlV;
  }
  return null;
}
