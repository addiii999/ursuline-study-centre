import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ursulinstudycentre.in"),
  title: "Ursuline Study Centre | Premium Girls' Coaching Institute, Ranchi",
  description: "Ursuline Study Centre - Ranchi's premier girls-only coaching for Classes 9-12. Specializing in Science, Commerce, Humanities, and competitive exams like JEE, NEET & CLAT. Powered by the legacy of Academic Origin.",
  keywords: "Ursuline Study Centre, Girls Coaching Ranchi, JEE NEET Coaching, Ursuline Convent, Academic Origin, PCM PCB Commerce, Ranchi Best Coaching",
  authors: [{ name: "Ursuline Study Centre" }],
  icons: {
    icon: ['/logo.jpeg?v=1'],
    apple: ['/logo.jpeg?v=1'],
  },
  openGraph: {
    title: "Ursuline Study Centre | Premium Girls' Coaching - Ranchi",
    description: "Empowering Girls. Building Futures. Ranchi's trusted destination for academic excellence and competitive success.",
    url: "https://ursulinstudycentre.in",
    siteName: "Ursuline Study Centre",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ursuline Study Centre - Premium Girls' Coaching Institute",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ursuline Study Centre | Premium Girls' Coaching - Ranchi",
    description: "Empowering Girls. Building Futures. Ranchi's trusted destination for academic excellence.",
    images: ["/og-image.png"],
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
