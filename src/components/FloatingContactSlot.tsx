import { getTranslations } from "next-intl/server";
import { FloatingContact } from "@/components/FloatingContact";

export async function FloatingContactSlot() {
  const t = await getTranslations("Common");
  const tNav = await getTranslations("Nav");

  return (
    <FloatingContact whatsappLabel={t("floatingWhatsapp")} callLabel={tNav("call")} />
  );
}
