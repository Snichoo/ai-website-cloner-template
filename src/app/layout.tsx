import type { Metadata } from "next";
<<<<<<< HEAD
import { Teko, Roboto, Inter, Poppins } from "next/font/google";
=======
import { Inter, Roboto, Roboto_Slab } from "next/font/google";
import Script from "next/script";
>>>>>>> 8544f7810dd0a5551dc4ecd0c64f124e004e51b1
import "./globals.css";
import { BookingFormModal } from "@/components/BookingFormModal";

<<<<<<< HEAD
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
=======
const META_PIXEL_ID = "1887046286013780";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
>>>>>>> 8544f7810dd0a5551dc4ecd0c64f124e004e51b1
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
<<<<<<< HEAD
  title: "Roofing Services in Brisbane & Queensland – Trusted",
  description:
    "Top-quality roofing in Brisbane. From inspections to replacements, we ensure your roof looks great & withstands QLD's weather.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Roofing Services in Brisbane & Queensland – Trusted",
    description:
      "Top-quality roofing in Brisbane. From inspections to replacements, we ensure your roof looks great & withstands QLD's weather.",
    images: ["/images/og-image.png"],
    type: "website",
  },
=======
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
>>>>>>> 8544f7810dd0a5551dc4ecd0c64f124e004e51b1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
<<<<<<< HEAD
      className={`${teko.variable} ${roboto.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
=======
      className={`${roboto.variable} ${robotoSlab.variable} ${interFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F5] text-[#1C1C1C]">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <BookingFormModal />
      </body>
>>>>>>> 8544f7810dd0a5551dc4ecd0c64f124e004e51b1
    </html>
  );
}
