"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WalkingCockroach = dynamic(
  () => import("@/components/WalkingCockroach").then((m) => m.WalkingCockroach),
  { ssr: false }
);

/** Ana iş parçacığı boşalınca yükle — TBT / INP etkisini azaltır */
export function LazyWalkingCockroach() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setReady(true), 2500);
    return () => window.clearTimeout(id);
  }, []);

  if (!ready) return null;
  return <WalkingCockroach />;
}
