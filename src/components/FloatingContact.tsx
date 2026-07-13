import { telHref, whatsappHref } from "@/lib/links";
import { externalLinkRel } from "@/lib/external-links";

type Props = {
  whatsappLabel: string;
  callLabel: string;
};

export function FloatingContact({ whatsappLabel, callLabel }: Props) {
  return (
    <div className="fixed bottom-0 right-0 z-40 flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={whatsappHref()}
        target="_blank"
        rel={externalLinkRel}
        className="flex min-h-[48px] items-center justify-center rounded-full bg-[#075E54] px-5 text-sm font-bold text-white shadow-lg hover:bg-[#064942]"
        aria-label={whatsappLabel}
      >
        WhatsApp
      </a>
      <a
        href={telHref()}
        className="flex min-h-[48px] items-center justify-center rounded-full bg-accent-600 px-5 text-sm font-bold text-white shadow-lg"
        aria-label={callLabel}
      >
        {callLabel}
      </a>
    </div>
  );
}
