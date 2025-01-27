import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom.scss";
import getMeta from "../lib/getMeta";

const metaData = await getMeta();

export const metadata: Metadata = {
  title: metaData.title || "Homepage",
  description: metaData.description || "Business homepage",
  icons: {
    icon: [
      {
        url: metaData.favicon ? metaData.favicon.url : "",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: metaData.favicon ? metaData.favicon.url : "",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: metaData.favicon ? metaData.favicon.url : "",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: metaData.favicon ? metaData.favicon.url : "",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: metaData.favicon ? metaData.favicon.url : "",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("META");
  console.log(metaData);

  return (
    <html lang="en">
      <body className={`antialiased text-center m-auto`}>{children}</body>
    </html>
  );
}
