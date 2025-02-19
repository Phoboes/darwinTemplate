import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom.scss";

import getContact from "../lib/getContact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const contactData = (await getContact()) as ContactData;
// const metaData = await getMeta();

interface ContactData {
  addressLine1: string | undefined;
  addressLine2: string | undefined;
  city: string | undefined;
  postcode: string | undefined;
  email: string;
  phoneNumber: string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased text-center m-auto`}>
        <Header />
        {children}

        <Footer footerData={contactData} />
      </body>
    </html>
  );
}
