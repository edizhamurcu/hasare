/** Client bileşenlerin ihtiyaç duyduğu next-intl namespace'leri — tam locale JSON değil */
const CLIENT_NAMESPACES = ["Nav", "Common", "Form"] as const;

export function pickClientMessages(
  messages: Record<string, unknown>
): Record<string, unknown> {
  const picked: Record<string, unknown> = {};
  for (const key of CLIENT_NAMESPACES) {
    if (key in messages) picked[key] = messages[key];
  }
  return picked;
}
