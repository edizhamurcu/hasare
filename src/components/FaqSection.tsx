export function FaqSection({
  title = "Sık sorulan sorular",
  faqs,
}: {
  title?: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <dl className="mt-6 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <dt className="font-semibold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
