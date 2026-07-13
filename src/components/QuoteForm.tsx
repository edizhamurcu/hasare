"use client";

import { FormEvent } from "react";
import { useTranslations } from "next-intl";
import { getCities } from "@/lib/cities";
import { whatsappHref } from "@/lib/links";
import { trackConversion } from "@/lib/analytics";
import { sanitizeUserText } from "@/lib/security";
import type { Locale } from "@/i18n/config";

type Props = { locale: Locale };

const PROPERTY_KEYS = [
  "propertyApartment",
  "propertyVilla",
  "propertySite",
  "propertyBusiness",
] as const;

export function QuoteForm({ locale }: Props) {
  const t = useTranslations("Form");
  const cities = getCities(locale);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = sanitizeUserText(String(data.get("name") ?? ""), 80);
    const city = sanitizeUserText(String(data.get("city") ?? ""), 60);
    const property = sanitizeUserText(String(data.get("property") ?? ""), 60);
    const issue = sanitizeUserText(String(data.get("issue") ?? ""), 500);

    const lines = [t("whatsappIntro"), ""];
    if (name) lines.push(t("whatsappName", { name }));
    if (city) lines.push(t("whatsappCity", { city }));
    if (property) lines.push(t("whatsappProperty", { property }));
    if (issue) lines.push(t("whatsappIssue", { issue }));

    trackConversion("quote_form_submit", { city, property });
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6"
      onSubmit={handleSubmit}
    >
      <p className="text-sm text-gray-600">{t("help")}</p>
      <label className="block text-sm font-medium">
        {t("name")}
        <input
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          className="mt-1 w-full min-h-[48px] rounded-lg border border-gray-300 px-3 py-2 text-base"
          placeholder={t("namePlaceholder")}
        />
      </label>
      <label className="block text-sm font-medium">
        {t("city")}
        <select
          name="city"
          required
          defaultValue=""
          className="mt-1 w-full min-h-[48px] rounded-lg border border-gray-300 px-3 py-2 text-base"
        >
          <option value="" disabled>
            {t("cityPlaceholder")}
          </option>
          {cities.map((city) => (
            <option key={city.slug} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium">
        {t("propertyType")}
        <select
          name="property"
          required
          defaultValue=""
          className="mt-1 w-full min-h-[48px] rounded-lg border border-gray-300 px-3 py-2 text-base"
        >
          <option value="" disabled>
            {t("propertyPlaceholder")}
          </option>
          {PROPERTY_KEYS.map((key) => (
            <option key={key} value={t(key)}>
              {t(key)}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium">
        {t("issue")}
        <textarea
          name="issue"
          required
          maxLength={500}
          rows={3}
          className="mt-1 w-full min-h-[48px] rounded-lg border border-gray-300 px-3 py-2 text-base"
          placeholder={t("issuePlaceholder")}
        />
      </label>
      <button
        type="submit"
        className="w-full min-h-[48px] rounded-xl bg-accent-500 py-3 font-bold text-white hover:bg-accent-600"
      >
        {t("submit")}
      </button>
    </form>
  );
}
