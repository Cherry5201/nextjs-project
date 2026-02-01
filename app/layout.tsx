import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React from "react";
import BackToTop from "../components/back-to-top";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Cat Facts & Introduction | CherryPie",
  description: "Discover the world of cats, their facts, and breeds.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-50 text-orange-900 min-h-screen pb-24`} style={{ backgroundColor: "#fff7ed" }}>
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}