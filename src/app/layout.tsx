import type { Metadata } from "next";
import { Teko, Roboto, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothAnchorScroll } from "@/components/SmoothAnchorScroll";
import { BusinessStructuredData } from "@/components/BusinessStructuredData";
import { SEO_PAGES, SITE_URL } from "@/lib/seo";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_PAGES.home.title,
  description: SEO_PAGES.home.description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${teko.variable} ${roboto.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* Keep scroll-reveal content visible if JavaScript is unavailable */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;}`}</style>
        </noscript>
        <SmoothAnchorScroll />
        <BusinessStructuredData />
        {children}
      </body>
    </html>
  );
}
