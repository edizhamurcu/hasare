"use client";

import { useEffect, useId, useRef, useState } from "react";

export type LanguageOption = {
  code: string;
  label: string;
  href: string;
  current: boolean;
};

type Props = {
  options: LanguageOption[];
  /** Ekran okuyucu etiketi, ör. "Dil" */
  menuLabel: string;
  className?: string;
};

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </svg>
  );
}

/**
 * Dünya simgeli dil menüsü. Bağlantılar düz <a> (tam sayfa yüklemesi) — mevcut
 * dil değiştirme davranışı korunur; hreflang ile arama motorlarına dil bildirilir.
 * Dışarı tıklama ve Escape menüyü kapatır.
 */
export function LanguageMenu({ options, menuLabel, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const current = options.find((o) => o.current) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${menuLabel}: ${current?.label ?? ""}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold uppercase leading-none text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <GlobeIcon className="h-5 w-5" />
        <span>{current?.code}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </button>
      <ul
        id={menuId}
        hidden={!open}
        className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-gray-200 bg-white py-1 text-gray-800 shadow-lg"
      >
        {options.map((o) => (
          <li key={o.code}>
            <a
              href={o.href}
              hrefLang={o.code}
              lang={o.code}
              aria-current={o.current ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`flex min-h-[44px] items-center justify-between gap-3 px-4 py-2 text-sm transition-colors hover:bg-brand-50 ${
                o.current ? "font-bold text-brand-700" : "font-medium"
              }`}
            >
              <span>{o.label}</span>
              <span className="text-xs uppercase text-gray-500">{o.code}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
