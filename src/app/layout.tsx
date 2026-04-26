import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ursuline Study Centre | Premium Girls Coaching Institute, Ranchi",
  description: "Ursuline Study Centre — only girls coaching for Classes 9–12. Science, Commerce, Humanities, JEE, NEET, CLAT & Vocational Courses. Located near Ursuline Convent School, Ranchi. Powered by Academic Origin.",
  keywords: "Ursuline Study Centre, Girls Coaching Ranchi, JEE NEET Coaching, Ursuline Convent, Academic Origin, PCM PCB Commerce",
  authors: [{ name: "Ursuline Study Centre" }],
  openGraph: {
    title: "Ursuline Study Centre | Premium Girls Coaching — Ranchi",
    description: "Empowering Girls. Building Futures. Admissions Open 2026–27.",
    url: "https://ursulinstudycentre.in",
    siteName: "Ursuline Study Centre",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#800000",
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
