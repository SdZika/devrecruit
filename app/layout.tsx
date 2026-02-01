import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Stellar North Services",
    template: "%s | Stellar North Services",
  },
  description:
    "Stellar North Services provides expert software development and technical recruiting to help companies navigate and build scalable digital products.",
  keywords: [
    "Stellar North Services",
    "software development",
    "technical recruiting",
    "web development",
    "custom software",
  ],
  icons: {
    icon: "/brand/icon.png", // export arrow/star as square icon
  },
  openGraph: {
    title: "Stellar North Services",
    description:
      "Expert software development and technical recruiting services.",
    siteName: "Stellar North Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
