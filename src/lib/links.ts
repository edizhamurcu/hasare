import { sanitizeUserText, sanitizeWhatsAppNumber } from "./security";
import { site } from "./site";

const DEFAULT_WHATSAPP_MSG =
  "Merhaba, KKTC haşere ve kemirgen ilaçlama için teklif almak istiyorum.";

export function telHref(phoneIndex = 0) {
  const phone = site.phones[phoneIndex] ?? site.phones[0];
  return `tel:${phone.e164.replace(/\s/g, "")}`;
}

export function whatsappHref(message?: string) {
  const safeMessage = sanitizeUserText(message ?? DEFAULT_WHATSAPP_MSG, 1500);
  const number = sanitizeWhatsAppNumber(site.whatsapp);
  const text = encodeURIComponent(safeMessage);
  return `https://wa.me/${number}?text=${text}`;
}

export function buildQuoteWhatsAppMessage(fields: {
  name?: string;
  city?: string;
  issue?: string;
}) {
  const name = sanitizeUserText(fields.name ?? "", 80);
  const city = sanitizeUserText(fields.city ?? "", 60);
  const issue = sanitizeUserText(fields.issue ?? "", 500);

  const lines = ["Merhaba, ücretsiz keşif talep ediyorum.", ""];

  if (name) lines.push(`Ad Soyad: ${name}`);
  if (city) lines.push(`Şehir: ${city}`);
  if (issue) lines.push(`Sorun: ${issue}`);

  return lines.join("\n");
}
