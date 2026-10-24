import { useEffect, useState } from "react";

export const SUBMIT_URL = "https://functions.poehali.dev/59d997b0-43b2-4f71-a432-d0a55ec2ec5d";

let cached: Promise<string> | null = null;

function loadClientKey(): Promise<string> {
  if (!cached) {
    cached = fetch(`${SUBMIT_URL}?action=captcha_config`)
      .then((r) => r.json())
      .then((d) => (d.clientKey as string) || "")
      .catch(() => "");
  }
  return cached;
}

export function useCaptchaKey(): string {
  const [key, setKey] = useState("");
  useEffect(() => {
    loadClientKey().then(setKey);
  }, []);
  return key;
}

export default useCaptchaKey;
