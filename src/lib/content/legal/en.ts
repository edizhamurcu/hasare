import type { LegalDocument } from "./types";

export const privacyEn: LegalDocument = {
  title: "Privacy Policy",
  description: "How Cyprus Pest Control collects and uses personal data on this website.",
  lastUpdated: "2026-06-04",
  sections: [
    {
      heading: "Data controller",
      paragraphs: ["This site is operated by Cyprus Pest Control. Contact: aloobocek · gmail.com."],
    },
    {
      heading: "Data we collect",
      paragraphs: [
        "Name, phone, address and messages you send via forms, phone, WhatsApp or email are processed to provide pest control services.",
        "Analytics cookies, if enabled, may collect usage statistics.",
      ],
    },
    {
      heading: "Purpose",
      paragraphs: [
        "Data is used only for quotes, scheduling and customer support — not sold to third parties.",
      ],
    },
    {
      heading: "Retention & security",
      paragraphs: ["Data is kept for a reasonable period with appropriate security measures."],
    },
    {
      heading: "Your rights",
      paragraphs: ["You may request access, correction or deletion by email. See our KVKK notice for details."],
    },
  ],
};

export const termsEn: LegalDocument = {
  title: "Terms of Use",
  description: "Website terms and limitations of liability.",
  lastUpdated: "2026-06-04",
  sections: [
    {
      heading: "General",
      paragraphs: [
        "By using this site you accept these terms. Content is informational; binding offers require a written agreement.",
      ],
    },
    {
      heading: "Services",
      paragraphs: ["Scope and warranty are confirmed in a written quote and agreement after inspection."],
    },
    {
      heading: "Liability",
      paragraphs: ["We are not liable for indirect damages from content errors or update delays."],
    },
    {
      heading: "Intellectual property",
      paragraphs: ["Text, images and branding may not be copied without permission."],
    },
  ],
};

export const kvkkEn: LegalDocument = {
  title: "Personal Data Notice (KVKK)",
  description: "Information notice under Turkish Personal Data Protection Law (applicable notice for KKTC customers).",
  lastUpdated: "2026-06-04",
  sections: [
    {
      heading: "Controller",
      paragraphs: ["Cyprus Pest Control — Northern Cyprus. aloobocek · gmail.com"],
    },
    {
      heading: "Categories of data",
      paragraphs: ["Contact details, address, service requests and optional business name."],
    },
    {
      heading: "Legal basis & purpose",
      paragraphs: ["Contract performance and legitimate interest for quotes, visits and invoicing."],
    },
    {
      heading: "Transfers",
      paragraphs: ["Limited sharing only where legally required or necessary for service delivery."],
    },
    {
      heading: "Requests",
      paragraphs: ["Contact aloobocek · gmail.com for data subject requests."],
    },
  ],
};
