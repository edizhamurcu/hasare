import type { Locale } from "@/i18n/config";

const logoAlts: Record<Locale, string> = {
  tr: "Alo Böcek — Kıbrıs Haşere ilaçlama, pest kontrol hizmetleri KKTC",
  en: "Alo Böcek — Cyprus pest control and rodent treatment Northern Cyprus",
  ru: "Alo Böcek — дезинсекция и дератизация на Северном Кипре",
};

/** OG / schema için tam çözünürlük (sayfa içi logo değil) */
export const logoImage = {
  src: "/images/alo-bocek-2026-144.png",
  alt: logoAlts.tr,
  width: 144,
  height: 144,
} as const;

/** Header — iç beyaz tonlar brand-700 ile uyumlu */
export const logoImageHeader = {
  src: "/images/alo-bocek-2026-header-144.png",
  alt: logoAlts.tr,
  width: 144,
  height: 144,
} as const;

const logoFileStem: Record<LogoSurface, string> = {
  light: "alo-bocek-2026",
  dark: "alo-bocek-2026-header",
};

export function getLogoSrc(surface: LogoSurface = "light", size: LogoSize = "md"): string {
  const px = logoAssetPx(size);
  return `/images/${logoFileStem[surface]}-${px}.webp`;
}

export function getLogoDimensions(size: LogoSize): { width: number; height: number } {
  const px = logoAssetPx(size);
  return { width: px, height: px };
}

function logoAssetPx(size: LogoSize): number {
  if (size === "lg") return 96;
  if (size === "sm") return 64;
  return 80;
}

export function getLogoAlt(locale: Locale = "tr"): string {
  return logoAlts[locale];
}

export type LogoSize = "sm" | "md" | "lg";

export const logoFrameSizes: Record<LogoSize, string> = {
  sm: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-14 w-14 sm:h-[72px] sm:w-[72px]",
  lg: "h-20 w-20 sm:h-24 sm:w-24",
};

export const logoPixelSizes: Record<LogoSize, number> = {
  sm: 64,
  md: 80,
  lg: 96,
};

/** Header (koyu) ve footer (açık) — logo bakır halkasıyla uyumlu çerçeve */
export type LogoSurface = "dark" | "light";

export const logoShellStyles: Record<LogoSurface, string> = {
  dark: "rounded-xl bg-brand-700 ring-1 ring-brand-600/60",
  light: "rounded-xl bg-white shadow-sm",
};
