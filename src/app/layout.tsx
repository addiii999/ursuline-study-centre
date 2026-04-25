import type { Metadata, Viewport } from "next";
import { Fustat, Inter } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ursuline Study Centre | Premium Coaching for Excellence",
  description: "Located inside Ursuline Convent School campus, providing elite academic guidance for Class 11, 12, JEE, and NEET.",
  keywords: "Ursuline Study Centre, Coaching Ranchi, JEE NEET Coaching, Ursuline Convent, Premium Coaching",
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fustat.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
