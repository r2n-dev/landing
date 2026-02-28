import type { Metadata } from "next";
import "./globals.scss";
import { inter } from "./fonts";
import { Footer, Header, PageWrapper } from "@/components";
import {
  DEFAULT_THEME,
  THEME_NAMES,
  THEME_STORAGE_KEY,
  ThemeProvider,
} from "@/design-system/theme";

export const metadata: Metadata = {
  title: "R2N",
  description: "R2N Landing Page",
};

const themeInitScript = `(() => {
  try {
    const key = "${THEME_STORAGE_KEY}";
    const fallback = "${DEFAULT_THEME}";
    const validThemes = ${JSON.stringify(THEME_NAMES)};
    const stored = window.localStorage.getItem(key);
    const selected = validThemes.includes(stored) ? stored : fallback;
    document.documentElement.setAttribute("data-theme", selected);
  } catch {
    document.documentElement.setAttribute("data-theme", "${DEFAULT_THEME}");
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
