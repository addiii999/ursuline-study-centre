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
        <div id="splash-screen" className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0505] transition-opacity duration-700 ease-in-out" style={{ display: 'none' }}>
          <div className="relative animate-pulse">
            <img src="/logo.jpeg" alt="USC Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full shadow-[0_0_30px_rgba(239,35,60,0.3)]" />
          </div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const splash = document.getElementById('splash-screen');
              if (!sessionStorage.getItem('splashShown')) {
                splash.style.display = 'flex';
                window.addEventListener('load', function() {
                  setTimeout(() => {
                    splash.style.opacity = '0';
                    setTimeout(() => {
                      splash.style.display = 'none';
                      sessionStorage.setItem('splashShown', 'true');
                    }, 700);
                  }, 300);
                });
              }
            })();
          `
        }} />
        {children}
      </body>
    </html>
  );
}
