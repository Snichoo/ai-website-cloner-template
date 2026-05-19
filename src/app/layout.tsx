import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
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
  title: "BEACON X DIGITAL",
  description:
    "We build websites that actually win you customers. Fast, beautiful, and built to convert. 100% satisfaction guaranteed.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${interFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F5] text-[#1C1C1C]">
        {children}
      </body>
    </html>
  );
}
