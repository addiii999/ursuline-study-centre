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
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
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
        {/* Splash Screen */}
        <div id="splash-screen" className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0505] transition-opacity duration-1000 ease-in-out">
          <div className="relative animate-pulse">
            <img src="/logo.jpeg" alt="USC Logo" className="w-32 h-32 sm:w-48 sm:h-48 object-contain rounded-full shadow-[0_0_40px_rgba(239,35,60,0.4)]" />
          </div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              const splash = document.getElementById('splash-screen');
              if (splash) {
                setTimeout(() => {
                  splash.style.opacity = '0';
                  setTimeout(() => {
                    splash.style.display = 'none';
                  }, 1000);
                }, 500);
              }
            });
          `
        }} />
        {children}
      </body>
    </html>
  );
}
