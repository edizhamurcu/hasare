import { site } from "./site";
import type { CityLanding } from "./cities";
import type { Service } from "./services";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: site.name,
    url: site.url,
    telephone: site.phoneE164,
    areaServed: {
      "@type": "Country",
      name: "Northern Cyprus",
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    ...(site.healthLicense
      ? {
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: "Sağlık Bakanlığı Lisansı",
            identifier: site.healthLicense,
          },
        }
      : {}),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@type": "PestControlService", name: site.name, url: site.url },
    areaServed: "KKTC",
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        description: service.priceRange,
      },
    },
  };
}

export function cityPlaceJsonLd(city: CityLanding) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city.title,
    description: city.metaDescription,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "Country", name: "KKTC" },
    },
    provider: { "@type": "PestControlService", name: site.name, url: site.url },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
