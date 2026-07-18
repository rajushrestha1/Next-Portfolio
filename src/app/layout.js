import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_SEO, BASE_URL } from "@/lib/seoConfig";
import { IBM_Plex_Mono } from "next/font/google";

// IBM Plex Mono Font
const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Global Metadata
export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${DEFAULT_SEO.siteName}`,
  },

  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,

  alternates: {
    canonical: BASE_URL,
  },

  authors: [
    {
      name: DEFAULT_SEO.author,
      url: BASE_URL,
    },
  ],

  creator: DEFAULT_SEO.author,
  publisher: DEFAULT_SEO.author,

  openGraph: {
    type: "website",
    locale: DEFAULT_SEO.locale,
    url: BASE_URL,
    siteName: DEFAULT_SEO.siteName,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [
      {
        url: `${BASE_URL}/og-default.jpeg`,
        width: 1200,
        height: 630,
        alt: DEFAULT_SEO.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    creator: DEFAULT_SEO.twitterHandle,
    images: [`${BASE_URL}/og-default.png`],
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

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },

  manifest: "/site.webmanifest",

  verification: {
    "google": "google6bd963068bfaf2ad",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlex.className} suppressHydrationWarning>
      <body>
        {/* Global Structured Data */}
        <JsonLd type="person" />
        <JsonLd type="website" />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}