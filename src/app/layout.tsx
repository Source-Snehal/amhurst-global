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
  title: "Amhurst Global - Global Talent Solutions",
  description: "Connecting exceptional talent with world-class opportunities across the UK, Middle East, and USA. Professional recruitment services for global markets.",
  keywords: ["recruitment", "talent solutions", "global recruitment", "UK jobs", "Middle East jobs", "USA jobs", "talent acquisition", "executive search"],
  authors: [{ name: "Amhurst Global" }],
  creator: "Amhurst Global",
  publisher: "Amhurst Global",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Amhurst Global',
    title: 'Amhurst Global - Global Talent Solutions',
    description: 'Connecting exceptional talent with world-class opportunities across the UK, Middle East, and USA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amhurst Global - Global Talent Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amhurst Global - Global Talent Solutions',
    description: 'Connecting exceptional talent with world-class opportunities across the UK, Middle East, and USA.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
