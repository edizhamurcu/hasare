"use client";

import { useEffect, useState } from "react";

export type AnnouncementItem = { text: string; href: string; external?: boolean };

type Props = {
  items: AnnouncementItem[];
  label: string;
  pauseLabel: string;
  playLabel: string;
  /** Mesaj başına süre (ms) */
  intervalMs?: number;
};

/**
 * Kaymayan, sırayla değişen duyuru şeridi.
 * - SSR ilk mesajı basar (yerleşim kayması yok, sabit yükseklik).
 * - Fare üstünde / klavye odağında durur; WCAG 2.2.2 için durdur/oynat düğmesi var.
 * - prefers-reduced-motion: otomatik geçiş kapalı, ilk mesaj sabit kalır.
 */
export function AnnouncementRotator({ items, label, pauseLabel, playLabel, intervalMs = 4500 }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const running = items.length > 1 && !paused && !hovered && !reducedMotion;

  useEffect(() => {
    if (!running) return;
    let fadeTimer: number | undefined;
    const id = window.setInterval(() => {
      setVisible(false);
      fadeTimer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, 250);
    }, intervalMs);
    return () => {
      window.clearInterval(id);
      if (fadeTimer) window.clearTimeout(fadeTimer);
    };
  }, [running, items.length, intervalMs]);

  const item = items[index] ?? items[0];
  if (!item) return null;

  return (
    <div
      role="region"
      aria-label={label}
      className="bg-brand-900 text-white"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setHovered(false);
      }}
      onFocus={(e) => {
        // Yalnızca klavye odağında durdur — dokunmatikte buton odakta kalıp şeridi kilitlemesin
        if ((e.target as HTMLElement).matches(":focus-visible")) setHovered(true);
      }}
      onBlur={() => setHovered(false)}
    >
      <div className="mx-auto flex h-8 max-w-6xl items-center gap-1 px-3 sm:gap-2 sm:px-4">
        <a
          href={item.href}
          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`min-w-0 flex-1 truncate text-center text-xs font-medium tracking-wide transition-opacity duration-200 hover:underline sm:text-sm ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {item.text}
        </a>
        {items.length > 1 && !reducedMotion ? (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? playLabel : pauseLabel}
            aria-pressed={paused}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded text-brand-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            {paused ? (
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true" focusable="false">
                <path d="M6 4.5v11l9-5.5-9-5.5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true" focusable="false">
                <path d="M6 4h3v12H6zM11 4h3v12h-3z" />
              </svg>
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
