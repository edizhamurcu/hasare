import { getTranslations } from "next-intl/server";

export async function FaqSection({
  faqs,
  title,
}: {
  faqs: { q: string; a: string }[];
  title?: string;
}) {
  const t = await getTranslations("Common");
  const heading = title ?? t("faqTitle");

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
      <dl className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5">
            <dt className="font-semibold text-brand-800">{faq.q}</dt>
            <dd className="mt-2 text-gray-600">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
