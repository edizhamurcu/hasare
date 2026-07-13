import { localizedPath } from "@/lib/metadata";
import type { Locale } from "@/i18n/config";
import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  locale: Locale;
  children: ReactNode;
};

/** Sunucu tarafı locale-aware link — next-intl client bundle gerektirmez */
export function LocaleLink({ href, locale, children, ...rest }: Props) {
  return (
    <a href={localizedPath(locale, href)} {...rest}>
      {children}
    </a>
  );
}
