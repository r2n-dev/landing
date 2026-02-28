import { LandingPage } from "@/components/landing/LandingPage";
import { landingContentByLocale } from "@/components/landing/landing-content";
import { resolveLandingLocaleFromHeaders } from "@/components/landing/i18n";
import { headers } from "next/headers";

export default async function HomePage() {
  const requestHeaders = await headers();
  const initialLocale = resolveLandingLocaleFromHeaders(requestHeaders);

  return <LandingPage contentByLocale={landingContentByLocale} initialLocale={initialLocale} />;
}
