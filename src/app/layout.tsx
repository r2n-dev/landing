import type { Metadata } from "next";
import "./globals.scss";
import { inter } from "./fonts";
import { Header } from "@/components";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";

export const metadata: Metadata = {
  title: "R2N",
  description: "R2N Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header></Header>
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
}
