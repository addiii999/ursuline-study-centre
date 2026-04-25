import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ursuline Study Centre | Premium Coaching for Academic Excellence",
  description: "Located inside Ursuline Convent School & Inter College, Ranchi. Expert coaching for Class 11, 12, JEE, NEET — in a safe, disciplined, and premium learning environment.",
  keywords: "Ursuline Study Centre, Coaching Ranchi, JEE Coaching, NEET Coaching, Class 11 12, Ursuline Convent",
  authors: [{ name: "Ursuline Study Centre" }],
  openGraph: {
    title: "Ursuline Study Centre | Premium Coaching for Academic Excellence",
    description: "Safe, trusted coaching inside Ursuline Convent School campus, Ranchi.",
    url: "https://ursulinstudycentre.in",
    siteName: "Ursuline Study Centre",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
