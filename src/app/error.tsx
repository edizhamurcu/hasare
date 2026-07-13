"use client";

import { useEffect } from "react";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Bir hata oluştu / Error</h1>
      <p className="mt-4 text-gray-600">
        Sayfa yüklenirken sorun çıktı. Lütfen tekrar deneyin.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button type="button" onClick={() => reset()} className="btn-accent">
          Tekrar dene / Retry
        </button>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="btn-accent">
          Ana sayfa / Home
        </a>
      </div>
    </section>
  );
}
