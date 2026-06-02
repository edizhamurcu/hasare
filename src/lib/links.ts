import { site } from "./site";

export function telHref() {
  return `tel:${site.phoneE164.replace(/\s/g, "")}`;
}

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(
    message ?? "Merhaba, KKTC ilaçlama için teklif almak istiyorum."
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
