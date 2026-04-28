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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ursuline Study Centre | Premium Girls' Coaching - Ranchi",
    description: "Empowering Girls. Building Futures. Ranchi's trusted destination for academic excellence.",
  },
};

export const viewport: Viewport = {
  themeColor: "#800000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": "Ursuline Study Centre",
    "alternateName": "USC Ranchi",
    "description": "Premium girls-only coaching institute in Ranchi for Classes 9-12 (JAC & CBSE). Specialists in Science, Commerce, Humanities, JEE, NEET, and CLAT. Guided by Academic Origin.",
    "url": "https://ursulinstudycentre.in",
    "logo": "https://ursulinstudycentre.in/logo.jpeg",
    "image": "https://ursulinstudycentre.in/logo.jpeg",
    "telephone": "+91-95075-89503",
    "email": "ursulinestudycentre@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Ursuline Convent School & Inter College, Purliya Road",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.370321",
      "longitude": "85.330689"
    },
    "hasMap": "https://maps.app.goo.gl/cjRX1kb3UhFfGSfx9",
    "founder": {
      "@type": "Person",
      "name": "Abhishek Pathak",
      "jobTitle": "Founder & Director"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Academic Origin"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.youtube.com/@academicorigin",
      "https://wa.me/919507589503"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
