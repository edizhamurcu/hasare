export function splitEmail(email: string): { user: string; domain: string } {
  const at = email.indexOf("@");
  if (at < 1) return { user: email, domain: "" };
  return { user: email.slice(0, at), domain: email.slice(at + 1) };
}
