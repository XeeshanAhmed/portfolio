import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import StructuredData from "@/components/structuredData/structuredData";
import Copilotskit from "@/components/copilotkit/Copilotskit";
import Providers from "@/redux/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    metadataBase: new URL("https://zeeshanahmad.vercel.app"),
    keywords: [
      "Zeeshan Ahmad",
      "Portfolio",
      "Next.js portfolio",
      "Web Developer",
      "JavaScript",
      "Frontend Developer",
      "React portfolio",
      "Developer Portfolio",
    ],
    title: {
      default: "Zeeshan Ahmad",
      template: "%s | Zeeshan Ahmad",
    },
    description: "Explore the professional portfolio of Zeeshan Ahmad, a skilled web developer specializing in Next.js.",
    openGraph: {
      title: "Zeeshan Ahmad - Portfolio",
      description: "Welcome to the portfolio of Zeeshan Ahmad, showcasing expertise in Next.js development and modern web solutions.",
      url: "https://zeeshanahmad.vercel.app",
      type: "website",
      images: [
        {
          url: "https://zeeshanahmad.vercel.app/profile_img/xeeshan.png",
          width: 800,
          height: 600,
          alt: "Zeeshan Ahmad Profile Picture",
        },
      ],
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/profile_img/xeeshan.png" type="image/png" />
        <StructuredData/>
      </head>
      <body className={inter.className}>
        <Copilotskit>
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
        </Copilotskit>
        </body>
    </html>
  );
}
