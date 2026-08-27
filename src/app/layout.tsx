import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { companyContacts } from "@/data/company";
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "ШИБО",
  alternateName: "SHYBO",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/shybo-logo.png`,
  telephone: companyContacts.phones.map((phone) =>
    phone.href.replace("tel:", ""),
  ),
  email: companyContacts.email.value,
  address: {
    "@type": "PostalAddress",
    postalCode: "50065",
    streetAddress: "вул. Соборності, 66а",
    addressLocality: "Кривий Ріг",
    addressCountry: "UA",
  },
} as const;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
