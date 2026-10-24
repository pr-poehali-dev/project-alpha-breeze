const TG_PHONE = "+79180445186";

const SERVICE_TEXT: Record<string, string> = {
  "/burenie-skvazhin": "бурение скважины",
  "/mini-ekskavator": "услуги мини-экскаватора",
  "/podryadnye-raboty": "подрядные работы",
};

export function telegramLink(service?: string): string {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const topic = service ? service.toLowerCase() : SERVICE_TEXT[path] || "бурение скважины";
  const text = `Здравствуйте! Интересует ${topic}. Подскажите, пожалуйста, стоимость и сроки.`;
  return `https://t.me/${TG_PHONE}?text=${encodeURIComponent(text)}`;
}

export default telegramLink;
