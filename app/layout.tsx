import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

import ClientNavbar from "@/components/ClientNavbar";
export const metadata: Metadata = {
  title: "Wheelworx | Rim & Mag Repairs, Tyres & Body Work Cape Town",
  description:
    "Wheelworx: Cape Town's premier rim and mag repair specialists. Offering expert tyre sales, mag sales, dent removal, bumper repairs, and minor body work repairs at 80 Sir Lowry Road.",
  keywords: [
    "rim repairs cape town",
    "mag repair south africa",
    "tyre sales cape town",
    "dent removal cape town",
    "bumper repairs cape town",
    "Wheelworx",
    "wheel repair service",
  ],
  authors: [{ name: "Wheelworx" }],
  openGraph: {
    title: "Wheelworx | Rim & Mag Repairs, Tyres & Body Work",
    description:
      "Premier rim and mag repair specialists in Cape Town. Expert dent removal, bumper repairs, and tyre sales.",
    type: "website",
    locale: "en_ZA",
    siteName: "Wheelworx",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelworx | Rim & Mag Repairs, Tyres & Body Work",
    description:
      "Premier rim and mag repair specialists in Cape Town. Expert dent removal, bumper repairs, and tyre sales.",
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
              "@type": "LocalBusiness",
              "name": "Wheelworx Rim & Mag Repairs",
              "image": "/wheelwork-logo.png",
              "phone": "+27 76 352 6616",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "80 Sir Lowry Road",
                "addressLocality": "Cape Town",
                "postalCode": "8001",
                "addressCountry": "ZA"
              },
              "description": "Premier rim and mag repair specialists in Cape Town. Expert dent removal, bumper repairs, and tyre sales.",
              "url": "https://wheelworx.co.za"
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
