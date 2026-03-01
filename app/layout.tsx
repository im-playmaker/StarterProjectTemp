import type { Metadata } from "next";
import { Cousine } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starter Template For Saas Solution",
  description: "Template to start your SAAS Solution",
};

// fonts
const cousine = Cousine({ weight: ["400"], subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-dvh bg-gray-50">{children}</body>
    </html>
  );
}
