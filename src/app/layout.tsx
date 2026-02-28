import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.scss";
import { jetBrainsMono, manrope } from "./fonts";
import { mantineTheme } from "@/theme/mantine-theme";

export const metadata: Metadata = {
  title: "Andres Artunduaga | Frontend Engineer",
  description:
    "Single-page portfolio built with Next.js and Mantine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${manrope.variable} ${jetBrainsMono.variable}`}>
        <MantineProvider theme={mantineTheme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
