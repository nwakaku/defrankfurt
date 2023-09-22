import "./globals.css";
import type { Metadata } from "next";
import { IconURL } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["vietnamese"] });

// Define your icon data conforming to the Icons type
const iconsData: IconURL =
  "https://bafybeidgj5wql5ko4b3bldr3ldgupgexohhatp5gbpbc6mm4hqxhlrfoxm.ipfs.w3s.link/DeFrankfurt%20Global%20icon.png";

const openGraph: OpenGraph = {
      type: "website",
      url: "https://www.defrankfurtglobal.com/",
      title: "Premium Steel Rods and Iron Sheets Supplier in Nigeria | DeFrankFurt Global",
      description: "DeFrankFurt Global: Your Trusted Source for Top-Quality Steel Rods and Iron Sheets in Nigeria. With a commitment to quality, integrity, and sustainability, we are your go-to partner for all your construction material needs. Contact us today for expert guidance and timely delivery.",
      siteName: "DeFrankFurt Global",
      images: [{
        url: "https://bafybeigv7svacl6xfnazgq7deoib4fwaszmv6pkw75gp5i52cjuxweiw4a.ipfs.w3s.link/DEFRANFURT%20GLOBAL%20RESOURCES-%20STEEL%20COMPANY%202.jpg",
        }],
    }

export const metadata: Metadata = {
  title:
    "Premium Steel Rods and Iron Sheets Supplier in Nigeria | DeFrankFurt Global",
  description:
    "DeFrankFurt Global: Your Trusted Source for Top-Quality Steel Rods and Iron Sheets in Nigeria. With a commitment to quality, integrity, and sustainability, we are your go-to partner for all your construction material needs. Contact us today for expert guidance and timely delivery.",
  icons: iconsData,
  openGraph: openGraph,
  alternates: {
    canonical: "https://www.defrankfurtglobal.com",
  },
  verification: {
    google: "google-site-verification="
  }
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
