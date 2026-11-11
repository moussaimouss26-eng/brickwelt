import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { StoreShell } from "@/components/layout/StoreShell";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SITE_URL, siteBrand } from "@/lib/site";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BrickNova – Kinderspielzeug kaufen | BrickWelt",
    template: "%s | BrickNova",
  },
  description: siteBrand.tagline,
  keywords: [
    "Kinderspielzeug",
    "Holzspielzeug",
    "BrickNova",
    "BrickWelt",
    "Plüschtier",
    "Kinderpuzzle",
    "STEM Spielzeug",
  ],
  openGraph: {
    title: "BrickNova – Kinderspielzeug",
    description: siteBrand.tagline,
    locale: "de_DE",
    type: "website",
    siteName: siteBrand.name,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "BrickNova – Kinderspielzeug",
    description: siteBrand.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${display.variable} ${body.variable} min-h-screen antialiased`}>
        <SiteJsonLd />
        <Providers>
          <StoreShell>{children}</StoreShell>
        </Providers>
      </body>
    </html>
  );
}
