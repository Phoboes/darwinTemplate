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
    icon: metaData.favico.url,
    shortcut: metaData.favico.url,
    apple: metaData.favico.url,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased text-center m-auto`}>{children}</body>
    </html>
  );
}
