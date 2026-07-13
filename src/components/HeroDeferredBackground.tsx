"use client";

import { useEffect, useState } from "react";

type Props = {
  src: string;
};

/**
 * Dekoratif hero arka planı — ilk HTML'de <img> yok; LCP h1/metin kalır.
 * Görsel requestIdleCallback sonrası yüklenir.
 */
export function HeroDeferredBackground({ src }: Props) {
  const [bgUrl, setBgUrl] = useState<string | null>(null);

  useEffect(() => {
    const optimized = `/_next/image?url=${encodeURIComponent(src)}&w=828&q=60`;
    const run = () => {
      const probe = new Image();
      probe.decoding = "async";
      probe.src = optimized;
      probe.onload = () => setBgUrl(optimized);
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(run, 2000);
    return () => window.clearTimeout(id);
  }, [src]);

  if (!bgUrl) return null;

  return (
    <div
      aria-hidden
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{ backgroundImage: `url("${bgUrl}")` }}
    />
  );
}
