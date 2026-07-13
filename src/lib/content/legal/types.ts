export type LegalSection = { heading: string; paragraphs: string[] };

export type LegalDocument = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};
