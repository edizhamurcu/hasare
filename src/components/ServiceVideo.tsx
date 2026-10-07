import type { ServiceVideo as ServiceVideoData } from "@/lib/content/services/tr";

type Props = {
  video: ServiceVideoData;
  heading: string;
  fallbackText: string;
};

/**
 * Hizmet sayfası saha videosu — self-hosted MP4.
 * Başlık stili üst kapsayıcıdaki `.prose-content h2` kuralından gelir.
 * preload="none" + poster: video, kullanıcı oynatana kadar indirilmez (LCP/bant genişliği korunur).
 */
export function ServiceVideo({ video, heading, fallbackText }: Props) {
  return (
    <section aria-labelledby="service-video-title">
      <h2 id="service-video-title">
        {heading}
      </h2>
      <figure className="mt-5">
        <div
          className="mx-auto w-full max-w-[16rem] overflow-hidden rounded-2xl border-4 border-white bg-gray-900 shadow-xl sm:max-w-sm"
          style={{ aspectRatio: `${video.width} / ${video.height}` }}
        >
          <video
            className="h-full w-full object-cover"
            controls
            muted
            playsInline
            preload="none"
            poster={video.poster}
            width={video.width}
            height={video.height}
            aria-describedby="service-video-caption"
            title={video.title}
          >
            <source src={video.src} type="video/mp4" />
            {video.webmSrc ? <source src={video.webmSrc} type="video/webm" /> : null}
            <a href={video.src}>{fallbackText}</a>
          </video>
        </div>
        <figcaption
          id="service-video-caption"
          className="mx-auto mt-3 max-w-md text-center text-sm text-gray-600"
        >
          {video.description}
        </figcaption>
      </figure>
    </section>
  );
}
