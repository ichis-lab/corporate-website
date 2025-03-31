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
  title: "Ichis inc.",
  appleWebApp: {
    title: "Ichis inc.",
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico', sizes: 'any' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: [
      { url: '/favicons/favicon.ico' }
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      { 
        url: '/favicons/android-chrome-192x192.png', 
        sizes: '192x192',
        type: 'image/png'
      },
      { 
        url: '/favicons/android-chrome-512x512.png', 
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  manifest: '/favicons/site.webmanifest',
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
