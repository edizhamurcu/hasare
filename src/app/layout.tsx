import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { getMetadataBase } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  applicationName: site.name,
  alternates: {
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM citation guide" }],
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#166534" },
    { media: "(prefers-color-scheme: dark)", color: "#14532d" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
