import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

import ClientNavbar from "@/components/ClientNavbar";
export const metadata: Metadata = {
  title: "Commercial Auto Parts Group | Taxi, Bakkie & Car Spares Specialists",
  description:
    "Your one-stop spares shop for Taxi, Bakkie, and Car parts. We specialize in stripping for spares, SABS approved products, and imported engines. Getting you back on the road. Fast!",
  keywords: [
    "commercial auto parts",
    "taxi spares south africa",
    "bakkie stripping for spares",
    "car parts johannesburg",
    "radiator centre",
    "engines for africa",
    "TPC logistics",
  ],
  authors: [{ name: "Commercial Auto Parts Group" }],
  openGraph: {
    title: "Commercial Auto Parts Group | Taxi, Bakkie & Car Spares",
    description:
      "One-stop shop for automotive spares. Bakkie stripping, taxi parts, car components, and imported engines. SABS approved.",
    type: "website",
    locale: "en_ZA",
    siteName: "Commercial Auto Parts Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Auto Parts Group | Spares Specialists",
    description:
      "Complete range of vehicle spares. Bakkie stripping, taxi parts, and imported engines. Getting you back on the road fast!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
          />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Commercial Auto Parts Group of Companies",
              "alternateName": "Commercial Auto Parts",
              "url": "https://commercialautoparts.co.za",
              "logo": "/new-parts.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "011-493-7010",
                "contactType": "customer service",
                "areaServed": "ZA",
                "availableLanguage": "English"
              }],
              "sameAs": [
                "https://www.facebook.com/commercialautoparts",
                "https://www.instagram.com/commercialautoparts",
                "https://www.linkedin.com/company/commercialautoparts"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <div className="flex min-h-screen flex-col">
              <ClientNavbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
