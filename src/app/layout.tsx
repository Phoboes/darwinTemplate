import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom.scss";
import getMeta from "../lib/getMeta";

const metaData = await getMeta();

export const metadata: Metadata = {
  title: metaData.title || "Homepage",
  description: metaData.description || "Business homepage",
  // icons: {
  //   icon: '/favicon.ico', // /public/favicon.ico
  //   shortcut: '/favicon.ico',
  //   apple: '/apple-touch-icon.png', // /public/apple-touch-icon.png
  // }
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
