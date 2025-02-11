import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom.scss";

import getContact from "../lib/getContact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getMeta from "../lib/getMeta";
const contactData = (await getContact()) as ContactData;
const metaData = await getMeta();

interface ContactData {
  "Address line 1": string | undefined;
  "Address line 2": string | undefined;
  City: string | undefined;
  Postcode: string | undefined;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased text-center m-auto`}>
        <Header title={metaData.title} />
        {children}

        <Footer footerData={contactData} />
      </body>
    </html>
  );
}
