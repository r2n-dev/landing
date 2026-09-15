import { normalizeLandingLocale } from "@/components/landing/i18n";
import { getLocalizedProfile } from "@/components/landing/localize-profile";

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLandingLocale((await params).locale);
  if (!locale) {
    return Response.json({ error: "Unsupported locale. Use en or es." }, { status: 404 });
  }
  return Response.json(getLocalizedProfile(locale), {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
