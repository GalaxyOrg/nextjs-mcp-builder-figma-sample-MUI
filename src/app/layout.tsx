import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from '@/components/ThemeRegistry';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Premium MUI + Tailwind App",
  description: "A professional Next.js application with MUI and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <div key="root" id="__next">
          <ThemeRegistry>{children}</ThemeRegistry>
        </div>
      </body>
    </html>
  );
}
