import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/Components/Footer";

// metadata profile url
// export const metadata: Metadata = {
//   title: "Bootcamp Program — M-Knows Consulting",
//   description:
//     "Bootcamp unggulan untuk pengembangan keterampilan dengan mentor berpengalaman di berbagai industri.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>M-KNOWS</title>
        <link
          rel="icon"
          href="/images/logos/logo-Mknows.png"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
