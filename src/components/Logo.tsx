import { getLocale, getTranslations } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import {
  getLogoAlt,
  getLogoSrc,
  logoFrameSizes,
  logoPixelSizes,
  logoShellStyles,
  type LogoSize,
  type LogoSurface,
} from "@/lib/logo";
import type { Locale } from "@/i18n/config";

type Props = {
  size?: LogoSize;
  surface?: LogoSurface;
  className?: string;
  linkToHome?: boolean;
};

export async function Logo({
  size = "md",
  surface = "light",
  className = "",
  linkToHome = true,
}: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Common");
  const alt = getLogoAlt(locale);
  const px = logoPixelSizes[size];
  const src = getLogoSrc(surface, size);

  const content = (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden p-0.5 ${logoFrameSizes[size]} ${logoShellStyles[surface]} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={linkToHome ? "" : alt}
        width={px}
        height={px}
        decoding="async"
        loading="eager"
        fetchPriority="low"
        className="h-full w-full object-contain"
      />
    </span>
  );

  if (!linkToHome) return content;

  return (
    <Link locale={locale}
      href="/"
      className="inline-flex min-h-[56px] items-center shrink-0 sm:min-h-[64px]"
      aria-label={t("logoHome", { alt })}
    >
      {content}
    </Link>
  );
}
