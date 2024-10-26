import type { Metadata } from "next";
import { Domine } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
 
const domine = Domine({ 
  weight: ['400', '700'],
  subsets: ['latin'],
 })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${domine.className} flex flex-col min-h-screen bg-customColor`}
      >
        <Navbar />
        <main className="flex-grow w-full ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}