import { andresProfileData } from "@/components/landing/profile-data";

export const siteUrl = new URL(andresProfileData.links.website.href);
export const siteOrigin = siteUrl.origin;

interface SeoConfig {
  brandName: string;
  brandDescription: string;
  siteName: string;
  title: string;
  description: string;
  keywords: string[];
  socialProfiles: string[];
}

export const seo: SeoConfig = {
  brandName: "R2N",
  brandDescription:
    "R2N is the personal brand of Andres Artunduaga focused on frontend engineering, software development, and web product delivery.",
  siteName: "Andres Artunduaga Portfolio",
  title: "Andres Artunduaga | R2N | Frontend Developer & Software Engineer",
  description:
    "Andres Artunduaga, founder of R2N, is a Senior Frontend Developer and Software Engineer with 10+ years of experience building scalable React, Angular, JavaScript, and TypeScript web applications.",
  keywords: [
    "R2N",
    "R2N.dev",
    "R2N frontend",
    "R2N software engineering",
    "Andres Artunduaga",
    "Andres Artunduaga Frontend Developer",
    "Andres Artunduaga Software Engineer",
    "Frontend Developer",
    "Software Engineer",
    "Senior Frontend Engineer",
    "React Developer",
    "Angular Developer",
    "TypeScript Developer",
    "JavaScript Engineer",
    "Design Systems Engineer",
    "Web Performance",
    "Bogota Frontend Developer",
  ],
  socialProfiles: [
    andresProfileData.links.linkedin.href,
    andresProfileData.links.github.href,
  ],
};
