import type { ImageMeta } from "@/lib/images";

type Props = {
  image: ImageMeta;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  quality?: number;
  fetchPriority?: "high" | "low" | "auto";
};

function isSvg(src: string) {
  return src.endsWith(".svg");
}

function buildSrcSet(image: ImageMeta): string | undefined {
  if (!image.variants?.length) return undefined;
  return image.variants.map((v) => `${v.src} ${v.width}w`).join(", ");
}

/** Responsive WebP — next/image client bundle gerektirmez */
export function OptimizedImage({
  image,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = false,
  fetchPriority,
}: Props) {
  const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : "low");
  const loading = priority ? "eager" : "lazy";
  const srcSet = buildSrcSet(image);

  if (isSvg(image.src)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.src}
          alt={image.alt}
          loading={loading}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={loading}
        decoding="async"
        className={`h-auto w-full ${className}`}
      />
    );
  }

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={image.alt}
        loading={loading}
        decoding="async"
        fetchPriority={resolvedFetchPriority}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={loading}
      decoding="async"
      fetchPriority={resolvedFetchPriority}
      className={`h-auto w-full ${className}`}
    />
  );
}
