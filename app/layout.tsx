import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "DriveNow | Rental Mobil Premium",
  description:
    "Sewa mobil harian, mingguan, dan bulanan dengan proses cepat, armada terawat, dan harga transparan."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} min-h-screen bg-background font-body text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
