import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/Components";

export const metadata: Metadata = {
  title: "Card Menu App",
  description: "Delivery Fooods",
  openGraph: {
    title: "Card Menu App",
    description: "Delivery Foods",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
