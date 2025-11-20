import type { Metadata } from "next";
import { Geist, Geist_Mono, Antic_Didone } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anticDidone = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-antic-didone",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HKP ❤️❤️❤️ LNNT",
  description: "Our First Trip To Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anticDidone.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
