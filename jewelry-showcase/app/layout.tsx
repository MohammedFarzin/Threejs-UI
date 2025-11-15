import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUXE - Timeless Elegance in Jewelry",
  description: "Discover our exquisite collection of handcrafted luxury jewelry. From engagement rings to elegant necklaces, each piece tells a story of timeless elegance.",
  keywords: ["luxury jewelry", "gold jewelry", "engagement rings", "necklaces", "bracelets", "handcrafted jewelry"],
  authors: [{ name: "LUXE Jewelry" }],
  openGraph: {
    title: "LUXE - Timeless Elegance in Jewelry",
    description: "Handcrafted luxury jewelry for life's precious moments",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
