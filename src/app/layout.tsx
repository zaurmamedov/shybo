import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import {
  createOpenGraphMetadata,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/data/seo";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-main",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | SHYBO",
  },
  description: siteDescription,
  openGraph: createOpenGraphMetadata({
    title: siteTitle,
    description: siteDescription,
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={manrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
