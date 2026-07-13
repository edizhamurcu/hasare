"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/analytics";

/** Delegated click tracking for tel: and wa.me links (works with server-rendered anchors). */
export function ConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor?.href) return;

      if (anchor.href.startsWith("tel:")) {
        trackConversion("phone_click", { link_url: anchor.href });
        return;
      }

      if (anchor.href.includes("wa.me/")) {
        trackConversion("whatsapp_click", { link_url: anchor.href });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
