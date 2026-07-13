import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_SIZE } from "./og-image";

type OgImageOptions = {
  title: string;
  subtitle: string;
  badge?: string;
  footer?: string;
};

const FONT_REGULAR = join(process.cwd(), "src/assets/fonts/NotoSans-Regular.ttf");
const FONT_BOLD = join(process.cwd(), "src/assets/fonts/NotoSans-Bold.ttf");

let fontsPromise: Promise<Array<{ name: string; data: ArrayBuffer; weight: 400 | 600 | 800; style: "normal" }>> | null =
  null;

function toArrayBuffer(buf: Buffer): ArrayBuffer {
  const copy = new Uint8Array(buf.byteLength);
  copy.set(buf);
  return copy.buffer;
}

/** Build sırasında Google Fonts’a gitmeden Türkçe karakter desteği */
async function getOgFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([readFile(FONT_REGULAR), readFile(FONT_BOLD)]).then(
      ([regular, bold]) => [
        { name: "Noto Sans", data: toArrayBuffer(regular), weight: 400 as const, style: "normal" as const },
        { name: "Noto Sans", data: toArrayBuffer(bold), weight: 600 as const, style: "normal" as const },
        { name: "Noto Sans", data: toArrayBuffer(bold), weight: 800 as const, style: "normal" as const },
      ]
    );
  }
  return fontsPromise;
}

/** 1200×630 sosyal paylaşım kartı — next/og ImageResponse */
export async function renderOgImage({ title, subtitle, badge, footer }: OgImageOptions) {
  const fonts = await getOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #14532d 0%, #166534 45%, #15803d 100%)",
          fontFamily: "Noto Sans",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {badge ? (
            <div
              style={{
                alignSelf: "flex-start",
                padding: "8px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.15)",
                color: "#dcfce7",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          ) : null}
          <div
            style={{
              fontSize: title.length > 48 ? 46 : 54,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#bbf7d0",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        </div>
        {footer ? (
          <div style={{ fontSize: 24, fontWeight: 600, color: "#86efac" }}>{footer}</div>
        ) : null}
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
