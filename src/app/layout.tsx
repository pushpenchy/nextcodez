import Header from "@/components/header/header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster, toast } from "sonner";
import ReactLenisWrapper from "@/common/react-lenis-wrapper";

const interDisplay = localFont({
  src: [
    // Thin 100
    { path: "./fonts/InterDisplay-Thin.woff", weight: "100", style: "normal" },
    {
      path: "./fonts/InterDisplay-ThinItalic.woff",
      weight: "100",
      style: "italic",
    },

    // ExtraLight 200
    {
      path: "./fonts/InterDisplay-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-ExtraLightItalic.woff",
      weight: "200",
      style: "italic",
    },

    // Light 300
    { path: "./fonts/InterDisplay-Light.woff", weight: "300", style: "normal" },
    {
      path: "./fonts/InterDisplay-LightItalic.woff",
      weight: "300",
      style: "italic",
    },

    // Regular 400
    {
      path: "./fonts/InterDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-Italic.woff",
      weight: "400",
      style: "italic",
    },

    // Medium 500
    {
      path: "./fonts/InterDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },

    // SemiBold 600
    {
      path: "./fonts/InterDisplay-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-SemiBoldItalic.woff",
      weight: "600",
      style: "italic",
    },

    // Bold 700
    { path: "./fonts/InterDisplay-Bold.woff", weight: "700", style: "normal" },
    {
      path: "./fonts/InterDisplay-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },

    // ExtraBold 800
    {
      path: "./fonts/InterDisplay-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-ExtraBoldItalic.woff",
      weight: "800",
      style: "italic",
    },

    // Black 900
    { path: "./fonts/InterDisplay-Black.woff", weight: "900", style: "normal" },
    {
      path: "./fonts/InterDisplay-BlackItalic.woff",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-inter-display",
});

const rubintek = localFont({
  src: "./fonts/rubintek.woff",
  display: "swap",
  variable: "--font-rubintek",
});

const siteTitle = "NextCodez | Web Design & Development Studio in Chattogram";
const siteDescription =
  "NextCodez designs and builds fast, modern websites, web apps and landing pages for businesses. Based in Chattogram, Bangladesh.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextcodez.com"),
  title: {
    default: siteTitle,
    template: "%s | NextCodez",
  },
  description: siteDescription,
  keywords: [
    "NextCodez",
    "web design Chattogram",
    "web development Bangladesh",
    "Next.js developer",
    "landing pages",
    "web studio",
  ],
  authors: [
    {
      name: "Pushpen Chowdhury",
      url: "https://www.linkedin.com/in/pushpen-chowdhury-1546652b4/",
    },
  ],
  creator: "NextCodez",
  publisher: "NextCodez",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en",
    siteName: "NextCodez",
    url: "https://nextcodez.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NextCodez: web design and development studio",
      },
    ],
  },
  twitter: {
    title: siteTitle,
    description: siteDescription,
    card: "summary_large_image",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NextCodez: web design and development studio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${interDisplay.variable} ${rubintek.variable} font-inter-display`}
      >
        <Toaster richColors />
        <ReactLenisWrapper>
          <Header />
          {children}
        </ReactLenisWrapper>
      </body>
    </html>
  );
}
