import type { LegalDocument } from "@/lib/content/legal/types";

export function LegalProse({ doc }: { doc: LegalDocument }) {
  return (
    <article className="prose-content mx-auto max-w-3xl px-4 py-10">
      <header className="border-b border-gray-100 pb-6">
        <h1 className="text-2xl font-bold text-brand-800 sm:text-3xl">{doc.title}</h1>
        <p id="legal-summary" className="mt-3 text-gray-600 leading-relaxed">
          {doc.description}
        </p>
        <p className="mt-2 text-sm text-gray-500">{doc.lastUpdated}</p>
      </header>
      {doc.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
