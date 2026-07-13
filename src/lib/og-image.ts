/** OG meta boyutları — statik görsel path'ine göre */
export function ogImageDimensions(imagePath: string): { width: number; height: number } {
  if (imagePath.includes("logo-og") || imagePath.endsWith(".png")) {
    return { width: 512, height: 512 };
  }
  return { width: 1200, height: 630 };
}

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";
