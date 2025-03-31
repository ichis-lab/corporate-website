import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { RootMetadata } from '@/settings';
import { CommonLayout } from '@/components/Layouts/CommonLayout';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = RootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.variable} ${inter.variable} antialiased`}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
