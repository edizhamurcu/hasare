import { telHref, whatsappHref } from "@/lib/links";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 md:hidden">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg"
        aria-label="WhatsApp"
      >
        WhatsApp
      </a>
      <a
        href={telHref()}
        className="rounded-full bg-accent-500 px-4 py-3 text-sm font-bold text-white shadow-lg"
        aria-label="Telefon"
      >
        Ara
      </a>
    </div>
  );
}
