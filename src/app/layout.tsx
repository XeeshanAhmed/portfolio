import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeController from "@/components/themeController/ThemeController";
import Drawer from "@/components/drawer/Drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeeshan Ahmad",
  description: "Zeeshan Ahmad Personal Portfolio. The best portfolio design. Unique Portfolio design. Best portfolio design for web developers. Next.js Portfolio. Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Drawer/>
        <Navbar/>
        <ThemeController/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
