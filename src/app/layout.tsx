import type { Metadata } from "next";
import { Teko, Roboto, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothAnchorScroll } from "@/components/SmoothAnchorScroll";

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
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const interFont = Inter({
  variable: "--font-inter-real",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roofing Services in Brisbane & Queensland - Trusted",
  description:
    "Top-quality roofing in Brisbane. From inspections to replacements, we ensure your roof looks great & withstands QLD's weather.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Roofing Services in Brisbane & Queensland - Trusted",
    description:
      "Top-quality roofing in Brisbane. From inspections to replacements, we ensure your roof looks great & withstands QLD's weather.",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${roboto.variable} ${inter.variable} ${interFont.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* Keep scroll-reveal content visible if JavaScript is unavailable */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;}`}</style>
        </noscript>
        <SmoothAnchorScroll />
        {children}
      </body>
    </html>
  );
}
