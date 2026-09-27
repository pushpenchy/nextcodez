export const CONTACT_EMAIL = "hello@nextcodez.com";
export const WHATSAPP_NUMBER = "8801303486130";
export const WHATSAPP_DISPLAY = "+880 1303-486130";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
