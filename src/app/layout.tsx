import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wiki Oficial de Rabanitos SMP",
  description: "La wiki oficial de Rabanitos SMP. Encuentra información sobre razas, estadísticas, mecánicas y más.",
  openGraph: {
    title: "Wiki Oficial de Rabanitos SMP",
    description: "La wiki oficial de Rabanitos SMP. Encuentra información sobre razas, estadísticas, mecánicas y más.",
    type: "website",
    locale: "es_MX",
    siteName: "RabanitosWiki",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
