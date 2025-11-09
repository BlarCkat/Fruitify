import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fruitify.africa'),
  title: {
    default: "Fruitify - The Next-Gen Operating System for Africa's Fresh Produce Exports",
    template: '%s | Fruitify'
  },
  description: "The Next Gen Operating System for Africa's Fresh Produce Exports",
  keywords: ["fresh produce", "agriculture", "exports", "Africa", "farming", "digital agriculture", "supply chain", "innovation", "sustainability", "Next-Gen", "Fruitify", "OnTrade", "Onfarm", "Appateng"],
  authors: [{ name: "Fruitify" }],
  creator: "Fruitify",
  publisher: "Fruitify",
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ]
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  appleWebApp: {
    title: "Fruitify",
    statusBarStyle: "black-translucent",
    capable: true
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" }
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@fruitifyhq", // Update this to your actual Twitter handle
    creator: "@fruitifyhq", // Update this to your actual Twitter handle
    title: "Fruitify - The Operating System for Africa's Fresh Produce Exports",
    description: "The Operating System for Africa's Fresh Produce Exports.",
    images: {
      url: "/social-card.jpg",
      alt: "Fruitify Platform Preview"
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fruitify.africa",
    siteName: "Fruitify",
    title: "Fruitify - The Operating System for Africa's Fresh Produce Exports",
    description: "The Operating System for Africa's Fresh Produce Exports",
    images: [
      {
        url: "/social-card.jpg",
        width: 1200,
        height: 630,
        alt: "Fruitify Platform",
      }
    ],
  },
  alternates: {
    canonical: "https://fruitify.africa",
    languages: {
      'en-US': 'https://fruitify.africa',
    }
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
