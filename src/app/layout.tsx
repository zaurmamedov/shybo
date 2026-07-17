import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-main",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SHYBO — будівельна компанія",
    template: "%s | SHYBO",
  },
  description: "Офіційний сайт будівельної компанії SHYBO. Сайт перебуває в розробці.",
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
