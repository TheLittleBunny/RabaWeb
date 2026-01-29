import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RabaWeb Wiki",
  description: "Official wiki for RabaPlugins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div style={{ display: "flex", minHeight: "calc(100vh - var(--header-height))" }}>
          <Sidebar />
          <main style={{ flex: 1, padding: "2rem", width: "100%" }}>
            <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
