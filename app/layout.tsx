import type { Metadata } from "next";
import { Cousine } from "next/font/google";
import "./globals.css";

const cousine = Cousine({ weight: ["400"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Starter Template For Saas Solution",
  description: "Template to start your SAAS Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${cousine.className} antialiased`}>{children}</body>
    </html>
  );
}
