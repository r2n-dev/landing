import { LandingPage } from "@/components/landing/LandingPage";
import { getLandingContentByLocale } from "@/components/landing/landing-content";
import { resolveLandingLocaleFromHeaders } from "@/components/landing/i18n";
import { getResume } from "@/lib/resume/get-resume";
import { headers } from "next/headers";
import { seo, siteOrigin } from "./seo";

export default async function HomePage() {
  const requestHeaders = await headers();
  const initialLocale = resolveLandingLocaleFromHeaders(requestHeaders);
  const profile = await getResume();
  const currentCompany = profile.experiences[0];
  const personSchema = {
    "@type": "Person",
    "@id": `${siteOrigin}/#person`,
    name: profile.name,
    alternateName: ["Andres Artunduaga Frontend Developer", "Andres Artunduaga Software Engineer"],
    url: siteOrigin,
    image: profile.portraitUrl,
    jobTitle: "Senior Frontend Engineer",
    description: seo.description,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogota D.C.",
      addressCountry: "CO",
    },
    worksFor: currentCompany
      ? {
        "@type": "Organization",
        name: currentCompany.company,
        url: currentCompany.companyUrl ?? undefined,
      }
      : undefined,
    alumniOf: profile.education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution,
    })),
    knowsAbout: profile.skills.technical,
    knowsLanguage: profile.skills.languages.map((language) => language.language.en),
    sameAs: seo.socialProfiles,
  };
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteOrigin}/#website`,
    url: siteOrigin,
    name: seo.siteName,
    description: seo.description,
    inLanguage: ["en", "es"],
    about: {
      "@id": `${siteOrigin}/#person`,
    },
  };
  const brandSchema = {
    "@type": "Organization",
    "@id": `${siteOrigin}/#organization`,
    name: seo.brandName,
    legalName: "R2N",
    url: siteOrigin,
    description: seo.brandDescription,
    founder: {
      "@id": `${siteOrigin}/#person`,
    },
    sameAs: [
      profile.links.website.href,
      ...seo.socialProfiles,
    ],
  };
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, brandSchema],
  };
  const jsonLd = JSON.stringify(schemaGraph).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <LandingPage contentByLocale={getLandingContentByLocale(profile)} initialLocale={initialLocale} />
    </>
  );
}
