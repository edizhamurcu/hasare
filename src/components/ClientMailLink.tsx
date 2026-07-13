"use client";

import { useEffect, useRef } from "react";

type Props = {
  user: string;
  domain: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

/** mailto yalnızca istemcide — Cloudflare email-decode.min.js tetiklenmez */
export function ClientMailLink({
  user,
  domain,
  className,
  children,
  "aria-label": ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.href = `mailto:${user}@${domain}`;
  }, [user, domain]);

  return (
    <a ref={ref} href="#" className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
