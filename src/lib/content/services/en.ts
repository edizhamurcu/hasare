import { company } from "../../company";

const brandName = "Cyprus Pest Control";
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
    title: "Cockroach Control Northern Cyprus",
    shortTitle: "Cockroach",
    metaDescription:
      "Guaranteed cockroach control in Nicosia, Kyrenia and across Northern Cyprus. Same-day response, free inspection.",
    keywords: ["cockroach control", "cockroach treatment northern cyprus"],
    heroSubtitle: "Long-lasting results with gel and liquid treatments",
    processSteps: [
      "Free inspection and risk assessment",
      "Targeted treatment with approved products",
      "Follow-up visit and warranty briefing",
    ],
    faqs: [
      {
        q: "How long does cockroach treatment take?",
        a: "A standard apartment treatment takes 45–90 minutes; heavy infestations may require a second session.",
      },
      {
        q: "Can we stay at home during treatment?",
        a: "We recommend 2–4 hours of ventilation after application; instructions are provided for children and pets.",
      },
    ],
  },
  {
    slug: "fare-ilaclama",
    title: "Rat Control Nicosia and Northern Cyprus",
    shortTitle: "Rat",
    metaDescription:
      "Professional rat bait stations and trapping systems. Emergency response in Nicosia, Kyrenia and Famagusta.",
    keywords: ["rat control", "rat treatment nicosia"],
    heroSubtitle: "Stations + traps + prevention programme",
    processSteps: [
      "Activity detection (droppings, tracks, food damage)",
      "Secure station placement",
      "Trapping and exclusion recommendations",
    ],
    faqs: [
      {
        q: "How quickly does rat control become effective?",
        a: "Activity usually drops within 48–72 hours; full control is typically assessed within 7–14 days.",
      },
      {
        q: "Is it safe for pets?",
        a: "Lockable stations are used and placed where pets cannot access them.",
      },
    ],
  },
  {
    slug: "karinca-ilaclama",
    title: "Ant Control Service",
    shortTitle: "Ant",
    metaDescription:
      "Professional ant control that targets the colony at source. Service across Northern Cyprus.",
    keywords: ["ant control", "ant treatment northern cyprus"],
    heroSubtitle: "Gel bait targeting the colony source",
    processSteps: ["Trail and colony route detection", "Gel bait stations", "Periodic monitoring"],
    faqs: [
      {
        q: "Why do ants keep coming back?",
        a: "Killing only the visible trail is not enough; gel baits cut off colony feeding.",
      },
      {
        q: "Can treatment be done in the kitchen?",
        a: "Yes — approved gel baits and targeted application in food preparation areas.",
      },
    ],
  },
  {
    slug: "sivrisinek-ilaclama",
    title: "Mosquito Control and Midge Treatment",
    shortTitle: "Mosquito",
    metaDescription:
      "Mosquito control for gardens, housing estates and businesses. Summer season programmes.",
    keywords: ["mosquito control", "mosquito treatment northern cyprus"],
    heroSubtitle: "Seasonal protection with fogging and larvicide",
    processSteps: ["Breeding site identification", "Fogging / ULV", "Periodic summer programme"],
    faqs: [
      {
        q: "How often should mosquito control be carried out?",
        a: "In high-pressure areas we recommend a summer programme every 2–4 weeks.",
      },
      {
        q: "Do you treat sites with swimming pools?",
        a: "Yes — block contracts are available for estate management.",
      },
    ],
  },
  {
    slug: "bocek-ilaclama",
    title: "Insect Control — General Pest Management",
    shortTitle: "Insects / General",
    metaDescription:
      "Comprehensive insect and pest control across Northern Cyprus. Homes, villas, restaurants and hotels.",
    keywords: ["insect control", "pest control", "pest treatment northern cyprus"],
    heroSubtitle: "Multi-pest assessment in a single visit",
    processSteps: ["Site inspection", "Combined treatment plan", "Report and warranty"],
    faqs: [
      {
        q: "Which pests are included?",
        a: "Common pests such as cockroaches, ants, silverfish and ticks are assessed and treated.",
      },
      { q: "Is emergency service available?", a: "Yes — dispatch via our 24/7 emergency line." },
    ],
  },
  {
    slug: "termit-ilaclama",
    title: "Termite (White Ant) Treatment",
    shortTitle: "Termite",
    metaDescription:
      "Structural and timber termite treatment. Specialist termite programmes in Northern Cyprus.",
    keywords: ["termite treatment", "white ant northern cyprus"],
    heroSubtitle: "Structural protection and barrier application",
    processSteps: ["Damage assessment", "Barrier / injection", "Annual inspection"],
    faqs: [
      {
        q: "How do you recognise termite damage?",
        a: "Mud tubes, hollowed timber and winged termite swarms are typical signs.",
      },
      { q: "Do you provide a warranty?", a: "Written warranty is offered depending on the programme type." },
    ],
  },
  {
    slug: "akrep-ilaclama",
    title: "Scorpion Control and Treatment",
    shortTitle: "Scorpion",
    metaDescription:
      "Emergency response when scorpions are sighted. Perimeter and indoor targeted treatment.",
    keywords: ["scorpion control", "scorpion treatment northern cyprus"],
    heroSubtitle: "Perimeter barrier + indoor targeting",
    processSteps: ["Risk mapping", "Perimeter treatment", "Client briefing and prevention"],
    faqs: [
      {
        q: "What should I do after a scorpion sting?",
        a: "Seek medical care first; premises treatment is then scheduled.",
      },
      {
        q: "Is garden treatment available?",
        a: "Yes — stone piles and damp areas are prioritised.",
      },
    ],
  },
  {
    slug: "dezenfeksiyon",
    title: "Disinfection and Hygiene Treatment",
    shortTitle: "Disinfection",
    metaDescription: `${brandName} — disinfection for businesses, schools, hospitals and homes. COVID-19 disinfection and ULV fogging.`,
    keywords: ["disinfection", "covid disinfection northern cyprus", "commercial disinfection"],
    heroSubtitle: "COVID-19 disinfection and general hygiene protocol",
    processSteps: ["Area classification", "Product and PPE protocol", "Certified report"],
    faqs: [
      {
        q: "Do you offer COVID-19 disinfection?",
        a: "Yes — we provide dedicated COVID-19 disinfection services.",
      },
      {
        q: "Is it suitable for restaurants?",
        a: "Yes — treatments are scheduled after closing hours.",
      },
    ],
  },
  {
    slug: "ev-ilaclama",
    title: "Home Pest Control Northern Cyprus",
    shortTitle: "Home",
    metaDescription: `Pest and rodent control for houses, flats and estate units. ${brandName} ${brandPhones}.`,
    keywords: ["home pest control", "apartment pest treatment northern cyprus"],
    heroSubtitle: "Safe treatment for flats and detached homes",
    processSteps: ["Free inspection", "Targeted treatment", "Ventilation instructions"],
    faqs: [
      { q: "How long does home pest control take?", a: "Usually 1–2 hours depending on flat size." },
      {
        q: "Is it safe for pets?",
        a: "Approved products are used; waiting times after application are explained on site.",
      },
    ],
  },
  {
    slug: "is-yeri-ilaclama",
    title: "Commercial Pest Control",
    shortTitle: "Commercial",
    metaDescription:
      "Pest management and periodic maintenance for offices, shops and commercial premises.",
    keywords: ["commercial pest control", "office pest treatment nicosia"],
    heroSubtitle: "Periodic contracts and reporting",
    processSteps: ["Risk analysis", "Periodic plan", "Treatment report"],
    faqs: [
      { q: "Can treatment be done outside business hours?", a: "Yes — scheduled around your closing times." },
      {
        q: "Do you work with public institutions?",
        a: "Yes — we have corporate and public-sector references.",
      },
    ],
  },
  {
    slug: "hastane-ilaclama",
    title: "Hospital Pest Control",
    shortTitle: "Hospital",
    metaDescription:
      "Pest control and disinfection for healthcare facilities to hygiene standards.",
    keywords: ["hospital pest control", "clinic pest treatment"],
    heroSubtitle: "Sensitive-area protocol",
    processSteps: ["Department-based plan", "Approved product application", "Records and reporting"],
    faqs: [
      {
        q: "How often is hospital pest control carried out?",
        a: "A periodic programme is set up based on risk assessment.",
      },
      {
        q: "Is disinfection included?",
        a: "Disinfection can be planned as part of the hospital package.",
      },
    ],
  },
  {
    slug: "okul-ilaclama",
    title: "School Pest Control",
    shortTitle: "School",
    metaDescription: "Safe pest management for schools and educational institutions in Northern Cyprus.",
    keywords: ["school pest control"],
    heroSubtitle: "Holiday-period and out-of-hours application",
    processSteps: ["Holiday scheduling", "Child-safe product selection", "Report"],
    faqs: [
      {
        q: "Is treatment done while students are present?",
        a: "Preferably scheduled during holidays or outside school hours.",
      },
      { q: "Is a free inspection available?", a: "Yes — inspections are offered for institutional schools." },
    ],
  },
  {
    slug: "fabrika-ilaclama",
    title: "Factory Pest Control",
    shortTitle: "Factory",
    metaDescription: "Integrated pest management for production and warehouse areas.",
    keywords: ["factory pest control"],
    heroSubtitle: "Large-site and warehouse-focused programme",
    processSteps: ["Area mapping", "Station network", "Periodic audit"],
    faqs: [
      {
        q: "Do you work in food production facilities?",
        a: "Yes — sector-appropriate products and protocols are applied.",
      },
      {
        q: "How is this different from bakery pest control?",
        a: "Our bakery page details requirements specific to food production sites.",
      },
    ],
  },
  {
    slug: "firin-ilaclama",
    title: "Bakery Pest Control",
    shortTitle: "Bakery",
    metaDescription: `Pest control for bakeries and flour-product facilities — ${brandName}.`,
    keywords: ["bakery pest control", "bakery pest treatment"],
    heroSubtitle: "Food-safety focused pest management",
    processSteps: ["HACCP-aligned plan", "Gel and station application", "Audit report"],
    faqs: [
      { q: "Will the production line need to stop?", a: "We aim for minimal downtime through careful scheduling." },
      {
        q: "Which pests are the priority?",
        a: "Cockroaches, rodents and stored-product pests.",
      },
    ],
  },
  {
    slug: "gemi-ilaclama",
    title: "Ship Pest Control",
    shortTitle: "Ship",
    metaDescription:
      "Pest control and certification support for vessels and port craft.",
    keywords: ["ship pest control", "vessel pest treatment northern cyprus"],
    heroSubtitle: "Port and vessel specialist treatment",
    processSteps: ["Vessel inspection", "Cabin and hold treatment", "Documentation / report"],
    faqs: [
      {
        q: "Can treatment be done before port departure?",
        a: "Yes — appointments are planned to match port schedules.",
      },
      {
        q: "Are international documents required?",
        a: "Requested paperwork can be arranged — call us for details.",
      },
    ],
  },
];
