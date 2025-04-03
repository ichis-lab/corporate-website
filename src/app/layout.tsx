import type { Metadata } from 'next';
import './globals.css';
import { RootMetadata } from '@/settings';
import { CommonLayout } from '@/components/Layouts/CommonLayout';
import { inter, notoSansJP } from '@/theme/fonts';

export const metadata: Metadata = RootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${inter.variable} antialiased`}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
