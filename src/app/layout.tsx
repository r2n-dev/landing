import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { headers } from "next/headers";
import "@mantine/core/styles.css";
import "./globals.scss";
import { audiowide, jetBrainsMono, manrope } from "./fonts";
import { resolveLandingLocaleFromHeaders } from "@/components/landing/i18n";
import { andresProfileData } from "@/components/landing/profile-data";
import { mantineTheme } from "@/theme/mantine-theme";
import { seo, siteOrigin, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: seo.title,
    template: "%s | Andres Artunduaga",
  },
  description: seo.description,
  applicationName: seo.siteName,
  alternates: {
    canonical: "/",
  },
  keywords: seo.keywords,
  authors: [
    {
      name: andresProfileData.name,
      url: siteOrigin,
    },
  ],
  creator: andresProfileData.name,
  publisher: andresProfileData.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteOrigin,
    title: seo.title,
    description: seo.description,
    siteName: seo.siteName,
    locale: "en_US",
    alternateLocale: ["es_CO"],
    images: [
      {
        url: andresProfileData.portraitUrl,
        width: 540,
        height: 540,
        alt: `Portrait of ${andresProfileData.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [andresProfileData.portraitUrl],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = resolveLandingLocaleFromHeaders(requestHeaders);

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${manrope.variable} ${jetBrainsMono.variable} ${audiowide.variable}`}>
        <MantineProvider theme={mantineTheme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
