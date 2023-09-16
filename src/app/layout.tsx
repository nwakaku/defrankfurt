import "./globals.css";
import type { Metadata } from "next";
import { IconURL } from "next/dist/lib/metadata/types/metadata-types";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["vietnamese"] });

// Define your icon data conforming to the Icons type
const iconsData: IconURL =
  "https://cdn-icons-png.flaticon.com/128/1794/1794809.png";

export const metadata: Metadata = {
  title:
    "Premium Steel Rods and Iron Sheets Supplier in Nigeria | DeFrankFurt Global",
  description:
    "DeFrankFurt Global: Your Trusted Source for Top-Quality Steel Rods and Iron Sheets in Nigeria. With a commitment to quality, integrity, and sustainability, we are your go-to partner for all your construction material needs. Contact us today for expert guidance and timely delivery.",
  icons: iconsData,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
