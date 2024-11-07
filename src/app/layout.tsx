import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
import { ReactNode } from 'react';
import '~/styles/globals.css';

const fontFamily = Saira({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SaaS',
  description: 'Aplicação financeira com integrações',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontFamily.className} min-h-screen bg-gray-950 font-sans text-gray-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
