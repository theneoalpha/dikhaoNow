import type { Metadata } from "next";
import { Inter_Tight, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { getSiteSettings } from "@/sanity/queries";
import { fallbackSiteSettings } from "@/constants/data";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "DikhaoNow | Digital Catalog Solutions for Local Businesses",
  description:
    "Transform your offline business with mobile-friendly digital catalogs. Perfect for tiles dealers, marble shops, furniture makers, and local retailers in tier-2 & tier-3 cities. Get QR codes, WhatsApp integration, and 40% more sales.",
  keywords: [
    "Digital Catalog",
    "Mobile Catalog",
    "QR Code Business",
    "WhatsApp Catalog",
    "Local Business Digital",
    "Tiles Dealer Catalog",
    "Marble Shop Online",
    "Furniture Catalog",
    "Product Showcase",
    "Offline to Online",
    "Tier 2 Tier 3 Cities",
    "Small Business Digital",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "DikhaoNow | Digital Catalog Solutions for Local Businesses",
    description:
      "Mobile-friendly digital catalogs with QR codes and WhatsApp integration. Increase sales by 40% for tiles, marble, furniture, and local retail businesses.",
    images: [
      {
        url: "/dikhaoNow-banner.png",
        width: 1200,
        height: 630,
        alt: "DikhaoNow - Digital Catalog Solutions",
      },
    ],
    type: "website",
    siteName: "DikhaoNow",
  },
  twitter: {
    card: "summary_large_image",
    title: "DikhaoNow | Digital Catalog Solutions",
    description:
      "Mobile catalogs with QR codes for local businesses. Increase sales by 40%.",
    images: ["/dikhaoNow-banner.png"],
  },
};

import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings().catch(
    () => fallbackSiteSettings,
  );
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${instrumentSans.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.dataset.theme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <Header siteSettings={siteSettings} />
          {children}
          <Footer siteSettings={siteSettings} />
          <WhatsAppWidget
            phoneNumber={siteSettings?.contactPhone || "+91 98765 43210"}
            businessName={siteSettings?.brandName || "DikhaoNow"}
            welcomeMessage="Hi! Welcome to our digital catalog platform. How can we help you today?"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
