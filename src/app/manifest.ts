import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.activityArea}`,
    short_name: site.name,
    description:
      "KKTC haşere ve kemirgen ilaçlama — 7/24 acil servis, ücretsiz keşif. Northern Cyprus pest control.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#166534",
    lang: "tr",
    dir: "ltr",
    orientation: "portrait-primary",
    categories: ["business", "utilities"],
    icons: [
      { src: "/images/favicon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/favicon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/images/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
