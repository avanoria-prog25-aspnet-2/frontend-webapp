import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { ReactNode } from 'react';
import type { Metadata } from "next";
import { Archivo } from 'next/font/google'
import "./globals.css";



config.autoAddCss = false

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo'
})

export const metadata: Metadata = {
  title: "Learning Portal | Shiko Education",
  description: "This is a portal for Shiko Education",
};

type RootLayoutProps = {
  children: ReactNode
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
