import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lux Cart",
  description: "Elevate Your Style, Shop Lux with Pride.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
