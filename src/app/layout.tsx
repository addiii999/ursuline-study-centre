import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ursuline Study Centre — Build Your Future with Precision Learning",
  description:
    "Ursuline Study Centre offers expert coaching for students with small batches, regular tests, doubt-solving sessions, and personal attention. 500+ students trained. 95% success rate.",
  keywords: [
    "coaching institute",
    "study centre",
    "ursuline",
    "tuition",
    "student coaching",
    "expert faculty",
    "concept clarity",
  ],
  openGraph: {
    title: "Ursuline Study Centre",
    description: "Build Your Future with Precision Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
