import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Providers } from "@/components/layout/Providers";
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
  metadataBase: new URL("https://brickwelt.example"),
  title: {
    default: "BrickWelt – LEGO Sets kaufen | LEGO Angebote Deutschland",
    template: "%s | BrickWelt",
  },
  description:
    "BrickWelt: LEGO Sets kaufen und LEGO Angebote Deutschland entdecken. Unabhängiger Demo-Shop mit Versand in DE – nicht verbunden mit der LEGO Group.",
  keywords: [
    "LEGO Sets kaufen",
    "LEGO Angebote Deutschland",
    "LEGO Shop Deutschland",
    "BrickWelt",
    "Technic",
    "Star Wars LEGO",
    "LEGO City",
  ],
  openGraph: {
    title: "BrickWelt – LEGO Sets kaufen",
    description:
      "Premium Demo-Shop für LEGO Sets in Deutschland. Angebote, Neuheiten und Geschenkideen.",
    locale: "de_DE",
    type: "website",
    siteName: "BrickWelt",
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
        <Providers>
          <AnnouncementBar />
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
