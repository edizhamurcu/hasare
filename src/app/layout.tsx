import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — KKTC Böcek ve Haşere İlaçlama`,
    template: `%s | ${site.name}`,
  },
  description:
    "KKTC'nin en hızlı haşere ilaçlama hizmeti. Lefkoşa, Girne, Gazimağusa. 7/24 acil, aynı gün müdahale, ücretsiz keşif.",
  keywords: [
    "böcek ilaçlama",
    "haşere ilaçlama",
    "fare ilaçlama",
    "sivrisinek ilaçlama",
    "ilaçlama şirketi kktc",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language}>
      <body>
        <JsonLd data={localBusinessJsonLd()} />
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
