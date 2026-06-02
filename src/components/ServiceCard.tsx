import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
    >
      <h3 className="text-lg font-bold text-brand-800 group-hover:text-brand-600">
        {service.shortTitle}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-gray-600">{service.metaDescription}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
        Detaylı bilgi →
      </span>
    </Link>
  );
}
