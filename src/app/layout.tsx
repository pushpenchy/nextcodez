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

export const metadata: Metadata = {
  metadataBase: new URL("https://ui-layouts.com/templates/nextjs"),
  title: {
    default:
      "UI-Layouts Pro Template | Next.js 16, React 19, TailwindCSS 4, Motion",
    template: "%s | UI-Layouts Pro Template",
  },
  description:
    "UI-Layouts Pro Template - Modern Next.js 16 template with React 19, TailwindCSS 4, Motion animations, and AI SDK integration. Perfect for building stunning UI layouts, creative agency websites, and modern web applications with smooth animations and responsive design.",
  keywords: [
    "ui-layouts",
    "ui-layouts-pro",
    "nextjs template",
    "reactjs template",
    "tailwindcss template",
    "motion animations",
    "ai-sdk integration",
    "ui components",
    "creative agency",
    "web development",
    "frontend template",
    "modern ui",
    "responsive design",
    "animations",
    "gsap",
    "framer motion",
    "typescript template",
    "component library",
    "design system",
  ],
  authors: [{ name: "UI-Layouts", url: "https://ui-layouts.com" }],
  creator: "UI-Layouts",
  publisher: "UI-Layouts",
  category: "Technology",
  classification: "Web Development Template",
  openGraph: {
    title:
      "UI-Layouts Pro Template | Next.js 16, React 19, TailwindCSS 4, Motion",
    description:
      "Modern Next.js 16 template with React 19, TailwindCSS 4, Motion animations, and AI SDK. Perfect for building stunning UI layouts and creative agency websites.",
    type: "website",
    locale: "en",
    siteName: "UI-Layouts Pro",
    url: "https://ui-layouts.com/templates/nextjs",
    images: [
      {
        url: "https://ui-layouts.com/templates/nextjs/og.jpg",
        width: 1200,
        height: 630,
        alt: "UI-Layouts Pro Template - Next.js 16 with React 19, TailwindCSS 4, Motion",
      },
    ],
  },
  twitter: {
    title:
      "UI-Layouts Pro Template | Next.js 16, React 19, TailwindCSS 4, Motion",
    description:
      "Modern Next.js 16 template with React 19, TailwindCSS 4, Motion animations, and AI SDK. Perfect for building stunning UI layouts.",
    card: "summary_large_image",
    site: "@uilayouts",
    creator: "@uilayouts",
    images: [
      {
        url: "https://ui-layouts.com/templates/nextjs/og.jpg",
        width: 1200,
        height: 630,
        alt: "UI-Layouts Pro Template - Next.js 16 with React 19, TailwindCSS 4, Motion",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
